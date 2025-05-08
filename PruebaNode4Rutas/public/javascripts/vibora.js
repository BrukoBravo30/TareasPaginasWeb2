const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");
const countdownEl = document.getElementById("countdown");

const box = 20;
const canvasSize = 400;
let score = 0;
let snake, direction, food, gameRunning, lastMoveTime, directionQueue;

const moveInterval = 200; // milisegundos entre movimientos

function drawGame() {
  if (!gameRunning) return;

  requestAnimationFrame(drawGame);

  const now = Date.now();
  if (now - lastMoveTime >= moveInterval) {
    updateGame();
    lastMoveTime = now;
  }

  drawCanvas();
}

function drawCanvas() {
  ctx.clearRect(0, 0, canvasSize, canvasSize);

  // Dibujar comida
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, box, box);

  // Dibujar serpiente
  ctx.fillStyle = "#0f0";
  snake.forEach(part => {
    ctx.fillRect(part.x, part.y, box, box);
  });
}

function updateGame() {
  // Procesar una sola dirección por ciclo
  if (directionQueue.length > 0) {
    direction = directionQueue.shift();
  }

  const head = { ...snake[0] };
  switch (direction) {
    case "LEFT": head.x -= box; break;
    case "UP": head.y -= box; break;
    case "RIGHT": head.x += box; break;
    case "DOWN": head.y += box; break;
  }

  // Colisiones
  if (
    head.x < 0 || head.x >= canvasSize ||
    head.y < 0 || head.y >= canvasSize ||
    snake.some(segment => segment.x === head.x && segment.y === head.y)
  ) {
    gameOver();
    return;
  }

  // Comer comida
  if (head.x === food.x && head.y === food.y) {
    score += 10;
    scoreEl.textContent = score;
    food = spawnFood();
  } else {
    snake.pop(); // no comer = moverse normal
  }

  snake.unshift(head); // nuevo head
}

function spawnFood() {
  let foodX, foodY;
  do {
    foodX = Math.floor(Math.random() * (canvasSize / box)) * box;
    foodY = Math.floor(Math.random() * (canvasSize / box)) * box;
  } while (snake.some(segment => segment.x === foodX && segment.y === foodY));
  return { x: foodX, y: foodY };
}

function changeDirection(e) {
  const key = e.key;
  const lastDirection = directionQueue.length > 0 ? directionQueue[directionQueue.length - 1] : direction;

  if (key === "ArrowLeft" && lastDirection !== "RIGHT") directionQueue.push("LEFT");
  else if (key === "ArrowUp" && lastDirection !== "DOWN") directionQueue.push("UP");
  else if (key === "ArrowRight" && lastDirection !== "LEFT") directionQueue.push("RIGHT");
  else if (key === "ArrowDown" && lastDirection !== "UP") directionQueue.push("DOWN");
}

function startCountdown(callback) {
  let count = 3;
  countdownEl.textContent = count;
  const countdown = setInterval(() => {
    count--;
    countdownEl.textContent = count > 0 ? count : "¡Vamos!";
    if (count < 1) {
      clearInterval(countdown);
      setTimeout(() => {
        countdownEl.textContent = "";
        callback();
      }, 1000);
    }
  }, 1000);
}

function startGame() {
  snake = [
    { x: 160, y: 200 },
    { x: 140, y: 200 }
  ];
  direction = "RIGHT";
  directionQueue = [];
  food = spawnFood();
  score = 0;
  scoreEl.textContent = score;
  lastMoveTime = Date.now();
  gameRunning = false;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  countdownEl.textContent = "";

  startCountdown(() => {
    gameRunning = true;
    drawGame();
  });
}

function gameOver() {
  gameRunning = false;
  ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  ctx.font = "28px Arial";
  ctx.textAlign = "center";
  ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2 - 10);
  ctx.font = "20px Arial";
  ctx.fillText("Haz clic en Reiniciar", canvas.width / 2, canvas.height / 2 + 20);
}

document.addEventListener("keydown", changeDirection);
restartBtn.addEventListener("click", startGame);

startGame();
