self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/kerstgame/index.html',
        '/kerstgame/android-chrome-192x192.png',
        '/kerstgame/android-chrome-512x512.png',
        '/kerstgame/Dia1tr.PNG',
        '/kerstgame/pinguin22.png',
        '/kerstgame/pinguin.png',
         '/kerstgame/manifest.json',
        '/kerstgame/logo192.jpg',
        '/kerstgame/logo512.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
