self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("timer-cache").then(cache =>
      cache.addAll([
        "index.html",
        "manifest.json",
        "sound/BELL.MP3",
        "sound/KO.MP3"
      ])
    )
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});

