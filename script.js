function playMusic() {
  document.getElementById("bgMusic").play();
}

function showWish() {
  const name = document.getElementById("name").value || "Friend";
  const msg = document.getElementById("msg").value || "Happy Holidays!";
  document.getElementById("output").innerText =
    `🎄 ${name}: ${msg}`;
}
