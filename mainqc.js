document.addEventListener("DOMContentLoaded", function () {
  handleAdVisibility();
  document.addEventListener("click", function (e) {
    const closeBtn = e.target.closest(".xx-ads-close");
    if (closeBtn) {
      const adContainer = closeBtn.closest(".xx-ads");
      if (adContainer) {
        adContainer.style.display = "none";
      }

      const hiddenUntil = Date.now() + 3 * 60 * 1000;
      setCookie("adsHiddenUntil", hiddenUntil, 3);

      e.stopImmediatePropagation();
    }
  }, true); 
});

function handleAdVisibility() {
  const ads = document.querySelectorAll(".xx-ads");
  const clicks = parseInt(getCookie("bodyClicked")) || 0;
  const hiddenUntil = parseInt(getCookie("adsHiddenUntil")) || 0;

  if (clicks >= 4 || Date.now() < hiddenUntil) {
    ads.forEach(ad => ad.style.display = "none");
  } else {
    ads.forEach(ad => ad.style.display = "");
  }
}

function setCookie(name, value, minutes) {
  const expires = minutes
    ? `; expires=${new Date(Date.now() + minutes * 60000).toUTCString()}`
    : "";
  document.cookie = `${name}=${value || ""}${expires}; path=/`;
}

function getCookie(name) {
  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length);
    }
  }
  return null;
}
