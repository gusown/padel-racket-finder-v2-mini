// Every gusown Pages project shares the github.io origin, so only caches with this prefix are ours.
const CACHE_PREFIX = "padel-finder-";
const CACHE_NAME = CACHE_PREFIX + "v4";
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
      Promise.all(keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

// Network-first for the same-origin app shell: always loads a consistent, current set of files
// when online (no new index.html next to an old app.js), and falls back to the cache offline.
// Cross-origin requests (racket photos on padelreference.com) are left untouched.
self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);
  if (event.request.method !== "GET" || url.origin !== location.origin) return;
  const isNavigation = event.request.mode === "navigate";

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    try {
      const response = await fetch(event.request, { cache: "no-cache" });
      if (response.ok) event.waitUntil(cache.put(event.request, response.clone()));
      return response;
    } catch (err) {
      const cached = await cache.match(event.request, { ignoreSearch: isNavigation });
      if (cached) return cached;
      if (isNavigation) {
        const shell = await cache.match("./index.html");
        if (shell) return shell;
      }
      return Response.error();
    }
  })());
});
