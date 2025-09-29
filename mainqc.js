(function () {
  function setCookie(name, value, minutes) {
    const expires = minutes
      ? `; expires=${new Date(Date.now() + minutes * 60000).toUTCString()}`
      : '';
    document.cookie = `${name}=${value || ''}${expires}; path=/`;
  }
  function getCookie(name) {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let c of cookies) {
      c = c.trim();
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
    }
    return null;
  }
  function handleAdVisibility() {
    const ads = document.querySelectorAll('.xx-ads');
    const hiddenUntil = parseInt(getCookie('adsHiddenUntil')) || 0;

    if (Date.now() < hiddenUntil) {
      ads.forEach(ad => (ad.style.display = 'none'));
    } else {
      ads.forEach(ad => (ad.style.display = ''));
    }
  }

  document.addEventListener('DOMContentLoaded', handleAdVisibility);
  document.addEventListener('click', function (e) {
    const closeBtn = e.target.closest('.xx-ads-close');
    if (!closeBtn) return;

    const adContainer = closeBtn.closest('.xx-ads');
    if (adContainer) adContainer.style.display = 'none';

    const hiddenUntil = Date.now() + 4 * 60 * 1000; // 4 phút
    setCookie('adsHiddenUntil', hiddenUntil, 3);
    handleAdVisibility();
  });

})();
