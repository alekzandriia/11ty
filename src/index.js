const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) { // if supported by browser
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/", // register service worker
      });
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

registerServiceWorker();
