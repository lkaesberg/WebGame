import Gameboard from "/js/gameboard/Gameboard.js";
import Player from "/js/gameboard/Player.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const p = document.getElementById('text')

ctx.fillStyle = "#FF0000";

let mouseX = 0;
let mouseY = 0;

let speedX = 0.0;
let speedY = 0.0;

const movement = {"up": false, "down": false, "left": false, "right": false}

const player = new Player(5.0, 5.0);
const gameboard = new Gameboard(1000, 1000, 180, player)

document.addEventListener('mousemove', ({clientX, clientY}) => {
  mouseX = clientX;
  mouseY = clientY;
});

document.addEventListener('keydown', ({key}) => {
  switch (key) {
    case "w":
      movement["up"] = true
      break
    case "a":
      movement["left"] = true
      break
    case "s":
      movement["down"] = true
      break
    case "d":
      movement["right"] = true
      break
  }
});

document.addEventListener('keyup', ({key}) => {
  switch (key) {
    case "w":
      movement["up"] = false
      break
    case "a":
      movement["left"] = false
      break
    case "s":
      movement["down"] = false
      break
    case "d":
      movement["right"] = false
      break
  }
});


setInterval(() => {
  let speedChange = 0.01
  let speedLimit = 1
  let breakSpeed = 1.3
  if (movement["up"]) speedY -= speedChange
  if (movement["down"]) speedY += speedChange
  if (movement["left"]) speedX -= speedChange
  if (movement["right"]) speedX += speedChange
  if (Math.abs(speedX) > speedLimit) speedX = speedLimit * Math.sign(speedX)
  if (Math.abs(speedY) > speedLimit) speedY = speedLimit * Math.sign(speedY)
  speedX /= breakSpeed
  speedY /= breakSpeed
  player.posX += speedX
  player.posY += speedY
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const height = canvas.height;
  const width = canvas.width;

  p.innerText = `H: ${height} W: ${width} MouseX: ${mouseX} MouseY: ${mouseY} PlayerX: ${player.posX.toFixed(2)} PlayerY: ${player.posY.toFixed(2)}`
  gameboard.render(ctx, height, width)
  player.render(ctx)
}, 20)
