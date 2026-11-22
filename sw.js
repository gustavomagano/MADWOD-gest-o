// Cache offline: vai sempre buscar a versão mais recente à rede (ignorando a cache do navegador);
// só usa a cópia guardada quando não há rede.
const CACHE = "madwod-v23";
const FILES = ["./", "index.html", "personalizar.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, { cache: "reload" }))))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const sameOrigin = new URL(e.request.url).origin === self.location.origin;
  const req = sameOrigin ? new Request(e.request, { cache: "no-cache" }) : e.request;
  e.respondWith(fetch(req).then(r => { if (sameOrigin && r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); } return r; }).catch(() => caches.match(e.request)));
});
