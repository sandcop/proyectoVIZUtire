/* ═══════════════════════════════════════════════════════════════
   VIZUtire CRM — Módulo de seguridad centralizado
   window.VizuSecurity expone:
     Sanitizer     — escapado / sanitización de strings
     Validators    — validaciones de campos
     StorageAdapter— acceso a localStorage con namespace + migración
     SessionManager— inactividad, multi-tab, auto-logout
     AuditLog      — registro de acciones
     RBAC          — roles y permisos
     ErrorBoundary — captura de errores globales
     Perf          — marcas de rendimiento
   ═══════════════════════════════════════════════════════════════ */
(function () {
    'use strict';

    /* ─── Sanitizer ─────────────────────────────────────────────── */
    const Sanitizer = {
        escapeOutput(s) {
            return String(s == null ? '' : s)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        },

        sanitizeInput(s, maxLen) {
            const max = maxLen || (window.APP_CONFIG && window.APP_CONFIG.MAX_RESEARCH_FIELD_LENGTH) || 200;
            return String(s == null ? '' : s).trim().slice(0, max);
        },

        sanitizeURL(url) {
            const s = String(url || '').trim();
            if (!s) return '';
            try {
                const u = new URL(s);
                if (u.protocol !== 'https:' && u.protocol !== 'http:') return '';
                return u.href;
            } catch (_) {
                return '';
            }
        },

        /* For inserting trusted static HTML (SVG icons, etc.) — only use with hardcoded strings */
        sanitizeHTML(html) {
            return String(html || '');
        },

        createSafeTextNode(text) {
            return document.createTextNode(String(text == null ? '' : text));
        }
    };

    /* ─── Validators ────────────────────────────────────────────── */
    const Validators = {
        isEmail(v) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v || ''));
        },
        isPhone(v) {
            return /^\+?[\d\s\-\(\)\.]{7,20}$/.test(String(v || ''));
        },
        isURL(v) {
            return !!Sanitizer.sanitizeURL(v);
        },
        isScore(v) {
            const n = parseFloat(v);
            return !isNaN(n) && n >= 0 && n <= 100;
        },
        validateResearchField(v) {
            const maxLen = (window.APP_CONFIG && window.APP_CONFIG.MAX_RESEARCH_FIELD_LENGTH) || 200;
            const s = String(v || '').trim();
            return s.length <= maxLen;
        },
        validateNote(v) {
            const maxLen = (window.APP_CONFIG && window.APP_CONFIG.MAX_NOTE_LENGTH) || 500;
            const s = String(v || '').trim();
            return s.length > 0 && s.length <= maxLen;
        }
    };

    /* ─── StorageAdapter ────────────────────────────────────────── */
    const NS = 'vizucrm_v2';

    const StorageAdapter = {
        _key(type, id) {
            return NS + ':' + type + ':' + id;
        },

        save(type, id, data) {
            try {
                localStorage.setItem(this._key(type, id), JSON.stringify(data));
                return true;
            } catch (_) {
                return false;
            }
        },

        load(type, id) {
            try {
                const raw = localStorage.getItem(this._key(type, id));
                return raw ? JSON.parse(raw) : null;
            } catch (_) {
                return null;
            }
        },

        remove(type, id) {
            try {
                localStorage.removeItem(this._key(type, id));
            } catch (_) {}
        },

        /* Loads with migration from old vizu_ namespace */
        loadWithMigration(type, id, oldKey) {
            const newData = this.load(type, id);
            if (newData !== null) return newData;

            /* Fall back to legacy key */
            if (!oldKey) return null;
            try {
                const raw = localStorage.getItem(oldKey);
                if (!raw) return null;
                const data = JSON.parse(raw);
                /* Migrate: write to new key, remove old */
                this.save(type, id, data);
                localStorage.removeItem(oldKey);
                return data;
            } catch (_) {
                return null;
            }
        }
    };

    /* ─── SessionManager ────────────────────────────────────────── */
    const SESSION_KEY = NS + ':session_tab';

    const SessionManager = {
        _timer: null,
        _warnTimer: null,
        _tabId: String(Date.now()) + Math.random().toString(36).slice(2),
        _onLogout: null,

        start(onLogout) {
            this._onLogout = onLogout || function () {};
            this._resetTimer();
            this._broadcastTab();
            this._detectMultipleTabs();

            const reset = this._resetTimer.bind(this);
            ['click', 'keydown', 'mousemove', 'scroll', 'touchstart'].forEach(ev => {
                document.addEventListener(ev, reset, { passive: true });
            });
        },

        stop() {
            clearTimeout(this._timer);
            clearTimeout(this._warnTimer);
        },

        _resetTimer() {
            clearTimeout(this._timer);
            clearTimeout(this._warnTimer);

            const timeout = (window.APP_CONFIG && window.APP_CONFIG.SESSION_TIMEOUT_MS) || 1800000;
            const warning = (window.APP_CONFIG && window.APP_CONFIG.SESSION_WARNING_MS) || 1500000;

            this._warnTimer = setTimeout(() => {
                const remaining = Math.round((timeout - warning) / 60000);
                if (typeof window.showSessionWarning === 'function') {
                    window.showSessionWarning(remaining);
                }
            }, warning);

            this._timer = setTimeout(() => {
                AuditLog.record('session_timeout', 'system', {});
                this.stop();
                if (this._onLogout) this._onLogout();
            }, timeout);
        },

        _broadcastTab() {
            try {
                localStorage.setItem(SESSION_KEY, this._tabId);
            } catch (_) {}
        },

        _detectMultipleTabs() {
            window.addEventListener('storage', (e) => {
                if (e.key === SESSION_KEY && e.newValue && e.newValue !== this._tabId) {
                    if (typeof window.showMultiTabWarning === 'function') {
                        window.showMultiTabWarning();
                    }
                }
            });
        }
    };

    /* ─── AuditLog ──────────────────────────────────────────────── */
    const AUDIT_KEY = NS + ':audit';
    const AUDIT_MAX = 200;

    const AuditLog = {
        record(action, target, meta) {
            try {
                const entries = this._load();
                entries.push({
                    id:        Date.now() + '-' + Math.random().toString(36).slice(2, 7),
                    user:      (window._currentUser && window._currentUser.email) || 'anonymous',
                    action:    String(action),
                    target:    String(target || ''),
                    meta:      meta || {},
                    timestamp: new Date().toISOString()
                });
                /* Keep only the last AUDIT_MAX entries */
                const trimmed = entries.slice(-AUDIT_MAX);
                localStorage.setItem(AUDIT_KEY, JSON.stringify(trimmed));
            } catch (_) {}
        },

        getLast(n) {
            return this._load().slice(-(n || 20));
        },

        clear() {
            try { localStorage.removeItem(AUDIT_KEY); } catch (_) {}
        },

        _load() {
            try {
                return JSON.parse(localStorage.getItem(AUDIT_KEY)) || [];
            } catch (_) {
                return [];
            }
        }
    };

    /* ─── RBAC ──────────────────────────────────────────────────── */
    const PERMISSIONS = {
        viewer:  ['read'],
        sales:   ['read', 'edit_estado', 'add_note', 'edit_research'],
        manager: ['read', 'edit_estado', 'add_note', 'edit_research', 'delete_lead', 'view_audit'],
        admin:   ['read', 'edit_estado', 'add_note', 'edit_research', 'delete_lead', 'view_audit', 'manage_users']
    };

    const RBAC = {
        _role: 'viewer',

        assignRole(email) {
            const cfg = window.APP_CONFIG || {};
            const admins   = cfg.ADMIN_EMAILS   || [];
            const managers = cfg.MANAGER_EMAILS  || [];
            const e = String(email || '').toLowerCase();

            if (admins.includes(e))   { this._role = 'admin';   }
            else if (managers.includes(e)) { this._role = 'manager'; }
            else if (e)                    { this._role = 'sales';   }
            else                           { this._role = 'viewer';  }

            return this._role;
        },

        can(permission) {
            return (PERMISSIONS[this._role] || []).includes(permission);
        },

        getRole() {
            return this._role;
        },

        /* Hides or disables a DOM element if the user lacks the permission */
        guardElement(el, permission) {
            if (!el) return;
            if (!this.can(permission)) {
                el.style.display = 'none';
                el.setAttribute('aria-hidden', 'true');
            }
        }
    };

    /* ─── ErrorBoundary ─────────────────────────────────────────── */
    const ERROR_KEY = NS + ':errors';
    const ERROR_MAX = 50;

    const ErrorBoundary = {
        init() {
            window.addEventListener('error', (e) => {
                this._store({
                    type:    'uncaught',
                    message: e.message,
                    source:  e.filename,
                    line:    e.lineno,
                    col:     e.colno,
                    stack:   e.error ? e.error.stack : null
                });
            });
            window.addEventListener('unhandledrejection', (e) => {
                this._store({
                    type:    'unhandledrejection',
                    message: String(e.reason),
                    stack:   e.reason && e.reason.stack ? e.reason.stack : null
                });
            });
        },

        getErrors() {
            try { return JSON.parse(localStorage.getItem(ERROR_KEY)) || []; } catch (_) { return []; }
        },

        _store(info) {
            try {
                const errors = this.getErrors();
                errors.push(Object.assign({ timestamp: new Date().toISOString() }, info));
                localStorage.setItem(ERROR_KEY, JSON.stringify(errors.slice(-ERROR_MAX)));
            } catch (_) {}
        }
    };

    /* ─── Perf ──────────────────────────────────────────────────── */
    const Perf = {
        _marks: {},

        start(label) {
            this._marks[label] = performance.now();
        },

        end(label) {
            const start = this._marks[label];
            if (start == null) return null;
            const ms = Math.round(performance.now() - start);
            delete this._marks[label];
            return ms;
        }
    };

    /* ─── Expose namespace ──────────────────────────────────────── */
    window.VizuSecurity = Object.freeze({
        Sanitizer,
        Validators,
        StorageAdapter,
        SessionManager,
        AuditLog,
        RBAC,
        ErrorBoundary,
        Perf
    });
}());
