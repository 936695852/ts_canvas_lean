import { createColor, rp } from '../script/utils'
import Ball from '../components/Ball'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

let W = (canvas.width = 800)
let H = (canvas.height = 600)

let balls: Ball[] = [],
  g: number = 0.05 //重力加速度

for (let i = 0; i < 100; i++) {
  balls.push(
    new Ball({
      x: W / 2,
      y: H,
      r: Math.random() > 0.9 ? rp([25, 40]) : rp([15, 30]),
      fillStyle: createColor(),
      vx: rp([-3, 3]), // -0.5 到 0.5 之间
      vy: rp([0, -10]),
    })
  )
}

function drawBall(ball: Ball) {
  ball.x += ball.vx
  ball.y += ball.vy
  ball.vy += g

  if (
    ball.x - ball.r >= W ||
    ball.x + ball.r <= 0 ||
    ball.y - ball.r >= H ||
    ball.y + ball.r <= 0
  ) {
    ball.x = W / 2
    ball.y = H
    ball.vx = rp([-3, 3])
    ball.vy = rp([0, -10])
  }
  ball.render(ctx)
}

;(function move(): void {
  window.requestAnimationFrame(move)
  ctx.clearRect(0, 0, W, H)
  balls.forEach(drawBall)
})()
