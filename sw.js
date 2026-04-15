self.addEventListener("install", e => {
  console.log("PWA Installed");
});

self.addEventListener("fetch", e => {
  e.respondWith(fetch(e.request));
});
