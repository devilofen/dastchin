// The demo works in a normal browser too; installation and offline support are
// optional enhancements for secure origins (including GitHub Pages).
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('./sw.js', { scope: './' });
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) { refreshing = true; location.reload(); }
      });

      function offerUpdate(worker) {
        if (!worker || !navigator.serviceWorker.controller || document.querySelector('.pwa-update')) return;
        const notice = document.createElement('div');
        notice.className = 'pwa-update';
        notice.setAttribute('role', 'status');
        notice.innerHTML = '<span>نسخهٔ تازهٔ دست‌چین آماده است.</span><button type="button">به‌روزرسانی</button>';
        notice.querySelector('button').addEventListener('click', () => worker.postMessage('SKIP_WAITING'));
        document.body.appendChild(notice);
      }

      if (registration.waiting) offerUpdate(registration.waiting);
      registration.addEventListener('updatefound', () => {
        const worker = registration.installing;
        if (worker) worker.addEventListener('statechange', () => {
          if (worker.state === 'installed') offerUpdate(worker);
        });
      });
    } catch (error) {
      console.warn('Offline support could not be enabled:', error);
    }
  });
}
