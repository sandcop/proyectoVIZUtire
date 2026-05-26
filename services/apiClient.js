/* ═══════════════════════════════════════════════════════════════
   VIZUtire CRM — Cliente HTTP centralizado
   window.VizuAPI expone:
     request(payload, options) — fetch con timeout, retry y token
     getLeads()               — trae todos los leads
     getCitas()               — trae todas las citas
     updateEstado(correo, fecha, estado)
   ═══════════════════════════════════════════════════════════════ */
(function () {
    'use strict';

    const DEFAULT_TIMEOUT_MS = 15000;
    const DEFAULT_RETRIES    = 2;

    function _cfg() {
        return window.APP_CONFIG || {};
    }

    function _redactToken(url) {
        /* Remove CRM_TOKEN value from any logged URL */
        const token = _cfg().CRM_TOKEN || '';
        if (!token) return url;
        return url.split(encodeURIComponent(token)).join('[REDACTED]');
    }

    async function _fetchWithTimeout(url, timeoutMs, signal) {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeoutMs);

        /* If caller passed an external signal, propagate its abort */
        if (signal) {
            signal.addEventListener('abort', () => controller.abort());
        }

        try {
            const res = await fetch(url, { signal: controller.signal });
            clearTimeout(timer);
            return res;
        } catch (err) {
            clearTimeout(timer);
            throw err;
        }
    }

    async function request(payload, options) {
        const cfg       = _cfg();
        const scriptURL = cfg.SCRIPT_URL || '';
        const token     = cfg.CRM_TOKEN  || '';
        const timeoutMs = (options && options.timeoutMs) || DEFAULT_TIMEOUT_MS;
        const retries   = (options && options.retries  != null) ? options.retries : DEFAULT_RETRIES;
        const signal    = options && options.signal;

        /* Always inject the token into the payload */
        const fullPayload = Object.assign({}, payload, { token });

        const url = scriptURL + '?data=' + encodeURIComponent(JSON.stringify(fullPayload));

        let lastErr;
        for (let attempt = 0; attempt <= retries; attempt++) {
            try {
                const res = await _fetchWithTimeout(url, timeoutMs, signal);

                if (!res.ok) {
                    const err = new Error('HTTP ' + res.status + ' ' + res.statusText);
                    err.status = res.status;
                    throw err;
                }

                const data = await res.json();

                /* Apps Script errors come as JSON with error field */
                if (data && data.error) {
                    throw new Error('API error: ' + data.error);
                }

                return data;
            } catch (err) {
                lastErr = err;

                /* Don't retry on explicit abort or 4xx client errors */
                const isAbort  = err.name === 'AbortError';
                const is4xx    = err.status && err.status >= 400 && err.status < 500;
                if (isAbort || is4xx) break;

                /* Wait before retry (exponential backoff: 500ms, 1000ms) */
                if (attempt < retries) {
                    await new Promise(r => setTimeout(r, 500 * Math.pow(2, attempt)));
                }
            }
        }

        /* Log sanitised URL (token redacted) for debugging */
        console.error('[VizuAPI] request failed:', _redactToken(url), lastErr);
        throw lastErr;
    }

    /* ─── Convenience wrappers ──────────────────────────────────── */
    function getLeads(options) {
        return request({ type: 'getLeads' }, options);
    }

    function getCitas(options) {
        return request({ type: 'getCitas' }, options);
    }

    function updateEstado(correo, fecha, estado, options) {
        return request({ type: 'updateEstado', correo, fecha, estado }, options);
    }

    function saveResearch(correo, fecha, data, options) {
        const user = (window._currentUser && window._currentUser.email) || '';
        return request({ type: 'saveResearch', correo, fecha, data, user }, options);
    }

    function getResearch(correo, fecha, options) {
        return request({ type: 'getResearch', correo, fecha }, options);
    }

    function addTimeline(correo, fecha, event, options) {
        const user = (window._currentUser && window._currentUser.email) || '';
        return request({ type: 'addTimeline', correo, fecha, event, user }, options);
    }

    function getTimeline(correo, fecha, options) {
        return request({ type: 'getTimeline', correo, fecha }, options);
    }

    function createLead(data, options) {
        const user = (window._currentUser && window._currentUser.email) || '';
        return request({ type: 'createLead', ...data, user }, options);
    }

    /* ─── Expose namespace ──────────────────────────────────────── */
    window.VizuAPI = Object.freeze({
        request,
        getLeads,
        getCitas,
        updateEstado,
        saveResearch,
        getResearch,
        addTimeline,
        getTimeline,
        createLead
    });
}());
