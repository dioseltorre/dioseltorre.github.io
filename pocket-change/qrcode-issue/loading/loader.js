var messages = ['読み込み中', '初回起動は少し時間がかかります', 'まもなくです', 'もう少しだけお待ち下さい', '通常よりも時間がかかっています'];
var msgEl = document.getElementById("message");
var pokepayImg = document.getElementById("pokepay");

function nextMessage(i) {
  if (i === messages.length) return;
  setTimeout(() => {
    msgEl.innerHTML = `${messages[i]}...`;
    nextMessage(i + 1);
  }, 3000);
}

pokepayImg.addEventListener("animationend", function () {
  var loadingContainer = document.getElementById("loading-container");
  msgEl.innerHTML = `${messages[0]}...`;
  setTimeout(() => {
    pokepayImg.remove();
    loadingContainer.style.display = 'flex';
    nextMessage(1);
  }, 1000);
});

// Ensure first time loading indicator is gone after app loads
window.addEventListener("flutter-first-frame", function () {
  var loading = document.getElementsByClassName("loading");
  if (loading && loading.length > 0) {
    loading[0].remove();
  }
});
