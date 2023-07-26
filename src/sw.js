// Cache resources
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(["/", "/styles.css"])
    })
  )
})

// Access cached resources
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then(response => { //check cache for resources
      return response || fetch(e.request) // return cached resource or else perform normal network  request (cache-first)
    })
    );
});