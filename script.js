const button = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");
const confettiContainer = document.getElementById("confetti");

button.addEventListener("click", () => {
  surprise.classList.remove("hidden");
  surprise.classList.add("show");

  button.textContent = "Kejutannya sudah terbuka 💖";
  button.disabled = true;

  createConfetti();
});

function createConfetti() {
  const symbols = ["💖", "💕", "💗", "✨", "🎉", "🎊", "🌸"];

  for (let i = 0; i < 80; i++) {
    const piece = document.createElement("div");

    piece.classList.add("confetti-piece");

    piece.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.fontSize = Math.random() * 15 + 15 + "px";
    piece.style.animationDuration =
      Math.random() * 2 + 2 + "s";

    confettiContainer.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 4000);
  }
}