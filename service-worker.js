self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/kerstgame/index.html',
        '/kerstgame/android-chrome-192x192.png',
        '/kerstgame/android-chrome-512x512.png',
        '/kerstgame/Lofi.mp3',
        '/kerstgame/Dia1tr.png',
        '/kerstgame/pinguin.png'
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
