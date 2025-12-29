self.addEventListener("install", () => {
  console.log("Service Worker установлен");
});

self.addEventListener("fetch", () => {
  // пока ничего не кэшируем
});
