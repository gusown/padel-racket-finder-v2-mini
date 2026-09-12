const CACHE_NAME = "padel-finder-v2";
const APP_SHELL = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./browse.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL.map(url => new Request(url, { cache: "reload" }))))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

// Same-origin app shell: stale-while-revalidate so the app works offline and
// updates itself in the background. Cross-origin requests (racket photos on
// padelreference.com) are left untouched — the app's icon fallback covers failed images.
self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);
  if (event.request.method !== "GET" || url.origin !== location.origin) return;
  const isNavigation = event.request.mode === "navigate";

  event.respondWith(
    caches.open(CACHE_NAME).then(cache =>
      cache.match(event.request, { ignoreSearch: isNavigation }).then(cached => {
        // no-cache revalidates against the server instead of reusing a stale HTTP-cache copy
        const network = fetch(event.request, { cache: "no-cache" })
          .then(response => {
            if (response.ok) cache.put(event.request, response.clone());
            return response;
          })
          .catch(() => cached || (isNavigation ? cache.match("./index.html") : undefined));
        return cached || network;
      })
    )
  );
});
