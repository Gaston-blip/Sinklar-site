const CACHE_NAME = 'polyclinique-v1';
const FILES = [
  '/Sinklar-site/',
  '/Sinklar-site/index.html',
  '/Sinklar-site/reponses.pdf' // ⚠️ Assurez-vous que votre PDF s'appelle bien reponses.pdf
];

// Installation : on télécharge et on met en cache les fichiers
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES))
      .then(() => self.skipWaiting())
  );
});

// Récupération : on sert les fichiers depuis le cache (hors-ligne)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});


