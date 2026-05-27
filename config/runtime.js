/* ═══════════════════════════════════════════════════════════════
   VIZUtire CRM — Configuración centralizada de runtime
   Todos los valores sensibles viven aquí y se acceden como
   window.APP_CONFIG. Nunca exponer directamente en HTML.
   ═══════════════════════════════════════════════════════════════ */
(function () {
    'use strict';

    window.APP_CONFIG = Object.freeze({
        /* Backend */
        SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbxAaigYWnx9dPfH6mIB2dfmULtweW4Q8uelPlu4U04kZjzJ3oOLdC-QmujNceMm4IY/exec',
        CRM_TOKEN:  'MinераVizu2026!',

        /* Firebase */
        FIREBASE: Object.freeze({
            apiKey:            'AIzaSyDAJvxajYVvUOKmTIIXgpBURa5OIVezK3M',
            authDomain:        'vizutire-crm.firebaseapp.com',
            projectId:         'vizutire-crm',
            storageBucket:     'vizutire-crm.firebasestorage.app',
            messagingSenderId: '191202109267',
            appId:             '1:191202109267:web:0d2a6cfbbe400fce8823a6'
        }),

        /* Sesión */
        SESSION_TIMEOUT_MS: 1800000,   /* 30 min inactividad */
        SESSION_WARNING_MS: 1500000,   /* aviso a los 25 min */

        /* Validación de entrada */
        MAX_NOTE_LENGTH:           500,
        MAX_RESEARCH_FIELD_LENGTH: 200,

        /* RBAC — roles del equipo VIZUtire */
        ADMIN_EMAILS:   ['sander.rojasc@gmail.com', 'marcelo.olivares@vizutire.com'],
        MANAGER_EMAILS: ['robmytampoajerez@gmail.com'],
        VIEWER_EMAILS:  [], /* agregar emails con acceso solo lectura */

        /* Versión */
        VERSION: '2.1.0'
    });
}());
