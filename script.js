const button = document.getElementById("birthdayButton");
const balloonsContainer = document.getElementById("balloons");
const confettiContainer = document.getElementById("confetti");

const gifLeft = document.getElementById("gifLeft");
const gifRight = document.getElementById("gifRight");
const leonBottom = document.getElementById("leons");
const topImage = document.getElementById("topImage");
const heartsContainer = document.getElementById("hearts");
const centerImage = document.getElementById("centerImage");

let heartsStarted = false;
let activated = false;

button.addEventListener("click", () => {
  if (activated) return;

  activated = true;

  // Меняем надпись
  button.textContent = "РАЗДЕТЬ ЛЕОНА";
  topImage.classList.add("show");

  // setTimeout(() => {
  //   button.classList.add("runaway");
  // }, 500);
  //love
  centerImage.classList.add("show");
  // Выезжают GIF
  gifLeft.classList.add("show");
  gifRight.classList.add("show");
  leonBottom.classList.add("show");

  // Запускаем конфетти
  createConfetti();

  // Запускаем воздушные шары
  createBalloons();
  //Сердечки
  heartsContainer.classList.add("active");
  startHearts();
});

function createConfetti() {
  const colors = [
    "#ff6fa5",
    "#ff9fc4",
    "#ffccdf",
    "#ffffff",
    "#f7a6c5",
    "#ffd166",
    "#cdb4db",
  ];

  const amount = 180;

  for (let i = 0; i < amount; i++) {
    const confetti = document.createElement("div");

    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";

    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    confetti.style.width = 6 + Math.random() * 7 + "px";

    confetti.style.height = 10 + Math.random() * 12 + "px";

    confetti.style.animationDuration = 2.5 + Math.random() * 3 + "s";

    confetti.style.animationDelay = Math.random() * 0.8 + "s";

    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

    confettiContainer.appendChild(confetti);

    // Удаляем после завершения анимации
    setTimeout(() => {
      confetti.remove();
    }, 6000);
  }
}
function startHearts() {
  if (heartsStarted) return;

  heartsStarted = true;

  setInterval(() => {
    createHeart();
  }, 250);
}

function createHeart() {
  const heart = document.createElement("div");

  heart.classList.add("heart");
  heart.textContent = "♥";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = 18 + Math.random() * 30 + "px";

  heart.style.animationDuration = 4 + Math.random() * 4 + "s";

  heart.style.animationDelay = Math.random() * 0.5 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 9000);
}

function createBalloons() {
  const colors = [
    "#ff8fab",
    "#ffb3c6",
    "#ffc2d1",
    "#f7a6c5",
    "#d8b4fe",
    "#a2d2ff",
    "#bde0fe",
  ];

  // Создаём шарики постепенно
  for (let i = 0; i < 35; i++) {
    setTimeout(() => {
      const balloon = document.createElement("div");

      balloon.classList.add("balloon");

      balloon.style.left = Math.random() * 100 + "vw";

      balloon.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

      const size = 55 + Math.random() * 35;

      balloon.style.width = size + "px";
      balloon.style.height = size * 1.25 + "px";

      balloon.style.animationDuration = 7 + Math.random() * 7 + "s";

      balloon.style.animationDelay = Math.random() * 1 + "s";

      balloonsContainer.appendChild(balloon);

      setTimeout(() => {
        balloon.remove();
      }, 16000);
    }, i * 180);
  }
}

document.addEventListener("mousemove", (e) => {
  if (!activated) return;

  const rect = button.getBoundingClientRect();

  const buttonX = rect.left + rect.width / 2;
  const buttonY = rect.top + rect.height / 2;

  const distance = Math.hypot(e.clientX - buttonX, e.clientY - buttonY);

  // Если мышка подошла достаточно близко
  if (distance < 180) {
    const maxX = window.innerWidth / 2 - 150;
    const maxY = window.innerHeight / 2 - 100;

    const randomX = Math.random() * maxX * 2 - maxX;

    const randomY = Math.random() * maxY * 2 - maxY;

    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }
});
