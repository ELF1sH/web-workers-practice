/* eslint-disable no-restricted-globals */
import {generateRandomInt} from "../../../utils/random/generateRandomInt";
import {getRandomColor} from "../../../utils/random/generateRandomColor";

self.addEventListener('message', (e) => {
  const { canvas } = e.data;

  const context = canvas.getContext("2d");
  animate(context);
})

function animate(ctx: any) {
  ctx.canvas.width = 300;
  ctx.canvas.height = 500;

  for (let i = 0; i < 800; i++) {
    createMovingCircle(ctx);
  }
}

const createMovingCircle = (ctx: any) => {
  let x = 0;
  const y = generateRandomInt(10, 500);
  const color = getRandomColor();
  const speed = generateRandomInt(10, 40);

  const drawCircle = (x: number, y: number) => {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  }

  const clearCircle = (x: number, y: number) => {
    ctx.beginPath();
    ctx.arc(x, y, 11, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
  }

  let timer: NodeJS.Timer | null = null;

  timer = setInterval(function () {
    clearCircle(x, y);
    x++;
    drawCircle(x, y);

    if (x > 300) {
      clearInterval(timer!);
    }
  }, speed);
}

export {};
