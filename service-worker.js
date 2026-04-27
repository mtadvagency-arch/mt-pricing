const CACHE_NAME = "mt-pricing-pro-v2";
const FILES = ["./","./index.html","./manifest.json","./service-worker.js","./mt-logo.png","./icon-192.png","./icon-512.png"];
self.addEventListener("install", event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME ? caches.delete(k) : null)))); self.clients.claim(); });
self.addEventListener("fetch", event => { event.respondWith(caches.match(event.request).then(response => response || fetch(event.request))); });
