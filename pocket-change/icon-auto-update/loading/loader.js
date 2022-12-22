function onCardAnimationEnd(moneyName) {
  document.getElementById("money-name").innerHTML = moneyName;
  document.getElementById("money-name").classList.toggle("money-name-animation");
  document.getElementById("loading-container").classList.toggle("loading-container-animation");
}

function getManifest(url, onSuccess, onFail, onError) {
  const req = new XMLHttpRequest();
  req.open('GET', url, true);
  req.setRequestHeader("ngrok-skip-browser-warning", "test");
  req.onload = function () {
    if (req.status == 200) {
      onSuccess(req.response);
    } else {
      onFail(req.status, req.response);
    }
  }
  req.onerror = function (err) {
    onError(err);
  }
  req.send();
}

function startLoadingIndicator() {
  const url = window.location.origin + 'manifest.json';
  console.log(url);
  getManifest(
    url,
    function (response) {
      const manifest = JSON.parse(response);
      const icon = manifest.icon_url ? manifest.icon_url : manifest.icons[0].src;
      const moneyName = manifest.name;
      document.getElementById("money-icon").style.backgroundImage = "url(" + icon + ")";
      document.getElementById("icon-card").style.display = "flex";
      document.getElementById("icon-card").addEventListener('animationend', () => onCardAnimationEnd(moneyName));
      // Insert apple-touch-icon's link tag in head
      // const link = document.createElement('link');
      // link.rel = 'apple-touch-icon';
      // link.href = icon;
      // document.head.appendChild(link);
    },
    function (status, response) {
      console.error('failed to read manifest.json. ', status, response);
    },
    function (error) {
      console.error('error reading manifest.json. ', error);
    },
  );
}

// Ensure first time loading indicator is gone after app loads
window.addEventListener("flutter-first-frame", function () {
  document.getElementsByClassName("loading")[0].remove();
  document.getElementsByClassName("made-with-pokepay")[0].remove();
});
