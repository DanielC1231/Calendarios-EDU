const CACHE_NAME = 'noticias-edu-v1';
const REPO_NAME = '/Noticias-EDU';

const urlsToCache = [
    REPO_NAME + '/',
    REPO_NAME + '/index.html',
    REPO_NAME + '/style.css',
    REPO_NAME + '/manifest.json'
];

// Instalar y guardar en caché
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
    self.skipWaiting();
});

// Activar
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Responder con caché o red
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

// MANEJAR NOTIFICACIONES PUSH (para OneSignal o notificaciones locales)
self.addEventListener('push', function(event) {
    if (event.data) {
        const data = event.data.json();
        event.waitUntil(
            self.registration.showNotification(data.title || 'Nueva Noticia', {
                body: data.body || 'Hay contenido nuevo disponible',
                icon: 'https://cdn-icons-png.flaticon.com/512/9162/9162399.png',
                badge: 'https://cdn-icons-png.flaticon.com/512/9162/9162399.png',
                vibrate: [200, 100, 200]
            })
        );
    }
});

// MANEJAR CLICK EN NOTIFICACIÓN
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(REPO_NAME + '/')
    );
});
