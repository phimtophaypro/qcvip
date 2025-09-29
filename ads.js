window.addEventListener('load', () => {
  fetch("https://api.country.is")
    .then(res => res.json())
    .then(data => {
      if (data.country === "VN" || data.country === "KH" || data.country === "SG") {
        setTimeout(() => {
          const htmlBlocks = {
  headerAdPC: `
    <div class="hiadu" style="margin:0 0 -5px;">
      <a href="https://www.sodo83.cc/?inviteCode=63108926" class="on-click" target="_blank" rel="nofollow noopener">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-58583bdf7c1339ba3d953a982bfb0737" width="728" height="50" alt="QC 1">
      </a>
      <a href="https://tk88.com/?inviteCode=88957993&regAgentJumpFlag=1" class="on-click" target="_blank" rel="nofollow noopener">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-a33c1f80f235ba2f1fcde6e575539143" width="728" height="50" alt="QC 1">
      </a>
      <a href="https://www.sodo83.cc/?inviteCode=63108926" class="on-click" target="_blank" rel="nofollow noopener">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-58583bdf7c1339ba3d953a982bfb0737" width="728" height="50" alt="QC 2">
      </a>
      <a href="https://www.sodo83.cc/?inviteCode=63108926" class="on-click" target="_blank" rel="nofollow noopener">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-58583bdf7c1339ba3d953a982bfb0737" width="728" height="50" alt="showkh">
      </a>
      <a href="https://au88link.bio/au88" class="on-click" target="_blank" rel="nofollow noopener">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-a3f24a63861b87ac4074174c046d9fc2" width="728" height="50" alt="showvn">
      </a>
      <a href="https://68gamewin33.shop/68GB" class="on-click" target="_blank" rel="nofollow noopener">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-4d7eee9871ce0bfc3446f4ee0545fa60" width="728" height="50" alt="showvn">
      </a>
    </div>
  `,
  headerAdMobile: `
    <div style="display:flex;flex-direction:column;align-items:center;">
      <a href="https://www.sodo83.cc/?inviteCode=63108926" class="on-click" target="_blank" rel="nofollow noopener">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-58583bdf7c1339ba3d953a982bfb0737" width="300" height="23" alt="QC M1">
      </a>
      <a href="https://tk88.com/?inviteCode=88957993&regAgentJumpFlag=1" class="on-click" target="_blank" rel="nofollow noopener">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-a33c1f80f235ba2f1fcde6e575539143" width="300" height="23" alt="QC M1">
      </a>
      <a href="https://www.sodo83.cc/?inviteCode=63108926" class="on-click" target="_blank" rel="nofollow noopener">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-58583bdf7c1339ba3d953a982bfb0737" width="300" height="23" alt="QC M2">
      </a>
      <a href="https://www.sodo83.cc/?inviteCode=63108926" class="on-click" target="_blank" rel="nofollow noopener">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-58583bdf7c1339ba3d953a982bfb0737" width="300" height="23" alt="showkh">
      </a>
      <a href="https://au88link.bio/au88" class="on-click" target="_blank" rel="nofollow noopener">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-a3f24a63861b87ac4074174c046d9fc2" width="300" height="23" alt="showvn">
      </a>
      <a href="https://68gamewin33.shop/68GB" class="on-click" target="_blank" rel="nofollow noopener">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-4d7eee9871ce0bfc3446f4ee0545fa60" width="300" height="23" alt="showvn">
      </a>
    </div>
  `,
  catfishm: `
    <div class="ads-wrap">
      <a href="https://bityvnd.com/gaisexvlpro" class="on-click" target="_blank" rel="nofollow noopener">
        <img decoding="async" src="https://qph.cf2.quoracdn.net/main-qimg-e31db116f57be8c9afd8db319798246e" width="500" height="25" alt="showvn" />
      </a>
      <a href="https://bityvnn.com/gaisexvlpro" class="on-click" target="_blank" rel="nofollow noopener">
        <img decoding="async"src="https://qph.cf2.quoracdn.net/main-qimg-eb172cd968a45cc26f23e05de4ace15a" width="500" height="25" alt="showvn" />
      </a>
      <a href="https://www.sodo83.cc/?inviteCode=63108926" class="on-click" target="_blank" rel="nofollow noopener">
        <img decoding="async" src="https://qph.cf2.quoracdn.net/main-qimg-58583bdf7c1339ba3d953a982bfb0737" width="300" height="25" alt="QC 2">
      </a>
      <a href="https://tk88.com/?inviteCode=88957993&regAgentJumpFlag=1" class="on-click" target="_blank" rel="nofollow noopener">
        <img decoding="async" src="https://qph.cf2.quoracdn.net/main-qimg-a33c1f80f235ba2f1fcde6e575539143" width="300" height="25" alt="showkh">
      </a>
      <a href="https://www.sodo83.cc/?inviteCode=63108926" class="on-click" target="_blank" rel="nofollow noopener">
        <img decoding="async" src="https://qph.cf2.quoracdn.net/main-qimg-58583bdf7c1339ba3d953a982bfb0737" width="300" height="25" alt="showkh">
      </a>
      <a href="https://www.sodo83.cc/?inviteCode=63108926" class="on-click" target="_blank" rel="nofollow noopener">
        <img decoding="async" src="https://qph.cf2.quoracdn.net/main-qimg-58583bdf7c1339ba3d953a982bfb0737" width="300" height="25" alt="showkh">
      </a>
      
      <a href="https://jun8899.me/vlsexdam" class="on-click" target="_blank" rel="nofollow noopener">
        <img decoding="async"src="https://qph.cf2.quoracdn.net/main-qimg-cdc5f1f1efc90ebbb6adfd611986610d" width="300" height="25" alt="showvn"  />
      </a>
	  <a href="https://mb6688.me/MB66gaisexvl" class="on-click" target="_blank" rel="nofollow noopener">
        <img decoding="async" src="https://qph.cf2.quoracdn.net/main-qimg-9313b54a91cdb52ef4fdce6b51928eb0" width="300" height="25" alt="showvn" style="margin-bottom: 5px;" />
      </a>
    </div>
    <div class="xx-ads-close on-click" onclick="document.querySelector('#catfishm')?.remove()">Tắt</div>
  `,
  catfishd: `
    <div class="ads-wrap">
      <a href="https://bityvnd.com/gaisexvlpro" class="on-click" target="_blank" rel="nofollow noopener">
        <img decoding="async" src="https://qph.cf2.quoracdn.net/main-qimg-e31db116f57be8c9afd8db319798246e" width="500" height="50" alt="showvn" />
      </a>
      <a href="https://bityvnn.com/gaisexvlpro" class="on-click" target="_blank" rel="nofollow noopener">
        <img decoding="async" src="https://qph.cf2.quoracdn.net/main-qimg-eb172cd968a45cc26f23e05de4ace15a" width="500" height="50" alt="showvn" />
      </a>
      <a href="https://www.sodo83.cc/?inviteCode=63108926" class="on-click" target="_blank" rel="nofollow noopener">
        <img decoding="async" src="https://qph.cf2.quoracdn.net/main-qimg-58583bdf7c1339ba3d953a982bfb0737" width="500" height="50" alt="QC 2">
      </a>
      <a href="https://tk88.com/?inviteCode=88957993&regAgentJumpFlag=1" class="on-click" target="_blank" rel="nofollow noopener">
        <img decoding="async" src="https://qph.cf2.quoracdn.net/main-qimg-a33c1f80f235ba2f1fcde6e575539143" width="500" height="50" alt="showkh">
      </a>
      <a href="https://www.sodo83.cc/?inviteCode=63108926" class="on-click" target="_blank" rel="nofollow noopener">
        <img decoding="async" src="https://qph.cf2.quoracdn.net/main-qimg-58583bdf7c1339ba3d953a982bfb0737" width="500" height="50" alt="showkh">
      </a>
      <a href="https://www.sodo83.cc/?inviteCode=63108926" class="on-click" target="_blank" rel="nofollow noopener">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-58583bdf7c1339ba3d953a982bfb0737" width="500" height="50" alt="showkh">
      </a>
	  <a href="https://jun8899.me/vlsexdam" class="on-click" target="_blank" rel="nofollow noopener">
        <img decoding="async" src="https://qph.cf2.quoracdn.net/main-qimg-cdc5f1f1efc90ebbb6adfd611986610d" width="500" height="50" alt="showvn" />
      </a>
      <a href="https://mb6688.me/MB66gaisexvl" class="on-click" target="_blank" rel="nofollow noopener">
        <img decoding="async" src="https://qph.cf2.quoracdn.net/main-qimg-9313b54a91cdb52ef4fdce6b51928eb0" width="500" height="50" alt="showvn" />
      </a>
      
    </div>
    <div class="xx-ads-close on-click" onclick="document.querySelector('#catfishd')?.remove()">Tắt</div>
  `,
  adAfterVideoPC: `
    <div class="hiadu" style="margin:0 0 -5px;">
      <a href="https://tk88.com/?inviteCode=88957993&regAgentJumpFlag=1" class="on-click" target="_blank" rel="nofollow noopener">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-a33c1f80f235ba2f1fcde6e575539143" width="728" height="50" alt="QC 1">
      </a>
      <a href="https://www.sodo83.cc/?inviteCode=63108926" class="on-click" target="_blank" rel="nofollow noopener">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-58583bdf7c1339ba3d953a982bfb0737" width="728" height="50" alt="QC 1">
      </a>
      <a href="https://www.sodo83.cc/?inviteCode=63108926" class="on-click" target="_blank" rel="nofollow noopener">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-58583bdf7c1339ba3d953a982bfb0737" width="728" height="50" alt="QC 2">
      </a>
      <a href="https://bittyvi.com/gaisexvlproo" class="on-click" target="_blank" rel="nofollow noopener">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-2b5efaecb2ad02ab2c8b876510c029f0" width="728" height="50" alt="showvn">
      </a>
    </div>
  `,
  adAfterVideoMobile: `
    <div style="display:flex;flex-direction:column;align-items:center;">
      <a href="https://tk88.com/?inviteCode=88957993&regAgentJumpFlag=1" class="on-click" target="_blank" rel="nofollow noopener">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-a33c1f80f235ba2f1fcde6e575539143" width="300" height="25" alt="QC 1">
      </a>
      <a href="https://www.sodo83.cc/?inviteCode=63108926" target="_blank" rel="nofollow noopener">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-58583bdf7c1339ba3d953a982bfb0737" width="300" height="25" alt="QC 1">
      </a>
      <a href="https://www.sodo83.cc/?inviteCode=63108926" class="on-click" target="_blank" rel="nofollow noopener">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-58583bdf7c1339ba3d953a982bfb0737" width="300" height="25" alt="QC 2">
      </a>
      <a href="https://bittyvi.com/gaisexvlproo" class="on-click" target="_blank" rel="nofollow noopener">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-2b5efaecb2ad02ab2c8b876510c029f0" width="300" height="25" alt="showvn">
      </a>
    </div>
  `
};
          Object.entries(htmlBlocks).forEach(([id, html]) => {
            const el = document.getElementById(id);
            if (el) {
              el.innerHTML = html;
              el.classList.remove("ads-hidden");
              el.style.opacity = "1";
              el.style.visibility = "visible";
              el.style.pointerEvents = "auto";
            }
          });

          
          (function filterBannersByCountry() {
            const country = (data.country || "").toUpperCase(); 
            const showForVNOnly = country === "VN";
            const showForKHSG   = country === "KH" || country === "SG";

            const scopeIds = Object.keys(htmlBlocks);
            scopeIds.forEach(id => {
              const root = document.getElementById(id);
              if (!root) return;

              root.querySelectorAll('img[alt]').forEach(img => {
                const tokens = new Set(((img.getAttribute('alt') || '').trim().toLowerCase()).split(/\s+/));
                const isShowVN = tokens.has('showvn');
                const isShowKH = tokens.has('showkh');
                if (isShowVN && !showForVNOnly) {
                  const holder = img.closest('a') || img;
                  holder.style.setProperty('display', 'none', 'important');
                  holder.setAttribute('aria-hidden', 'true');
                }
                if (isShowKH && !showForKHSG) {
                  const holder = img.closest('a') || img;
                  holder.style.setProperty('display', 'none', 'important');
                  holder.setAttribute('aria-hidden', 'true');
                }
              });
            });
          })();

          if (typeof initializeAdClose === "function") initializeAdClose();
          if (typeof handleAdVisibility === "function") handleAdVisibility();
        }, 400);
      }
    });
});
