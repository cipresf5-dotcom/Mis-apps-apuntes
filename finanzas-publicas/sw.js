/* Service worker de la app (offline + instalación PWA).
   Estrategia NETWORK-FIRST: siempre intenta traer la versión más nueva de la red
   y actualiza la caché; si no hay conexión, sirve lo cacheado. Así online siempre
   se ve el contenido actualizado. */
const CACHE = "fp-cache-v3";
const ASSETS = [
  "./", "./index.html",
  "./assets/styles.css", "./assets/app.js",
  "./assets/icon.png", "./manifest.webmanifest",
  "./data/curso.js",
  "./data/u01.js","./data/u02.js","./data/u03.js","./data/u04.js",
  "./data/u05.js","./data/u06.js","./data/u07.js","./data/u08.js",
  "./data/u09.js","./data/u10.js","./data/u11.js",
  "./data/parciales.js"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  e.respondWith(
    fetch(req)
      .then((res) => {
        // Guardar copia fresca en caché para uso offline
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(req).then((r) => r || caches.match("./index.html")))
  );
});
