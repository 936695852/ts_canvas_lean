import { createColor, rp } from '../script/utils'
import Ball from '../components/Ball'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

let W = (canvas.width = 800)
let H = (canvas.height = 600)

let balls: Ball[] = []

for (let i = 0; i < 10; i++) {
  balls.push(
    new Ball({
      x: W / 2,
      y: H / 2,
      r: rp([30, 70]),
      fillStyle: createColor(),
      vx: rp([-5, 5]), // -0.5 到 0.5 之间
      vy: rp([-6, 7]),
    })
  )
}

function ballsMove(ball: Ball) {
  ball.x += ball.vx
  ball.y += ball.vy

  if (ball.x - ball.r <= 0) {
    ball.x = ball.r
    ball.vx *= -1
  }
  if (ball.x + ball.r >= W) {
    ball.x = W - ball.r
    ball.vx *= -1
  }
  if (ball.y - ball.r <= 0) {
    ball.y = ball.r
    ball.vy *= -1
  }
  if (ball.y + ball.r >= H) {
    ball.y = H - ball.r
    ball.vy *= -1
  }
  ball.render(ctx)
}

;(function move(): void {
  window.requestAnimationFrame(move)
  ctx.clearRect(0, 0, W, H)
  balls.forEach(ballsMove)
})()
