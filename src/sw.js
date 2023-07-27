// Cache resources
self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(["/"])
    })
  )
})

// Access cached resources
self.addEventListener("fetch", (e) => {
  self.skipWaiting();
  e.respondWith(
    fetch(e.request).then(function (response) {
      return response;
    }).catch(function (error) {
      return caches.match(e.request).then(function (response) {
        return response;
      });
    })
  );
});
