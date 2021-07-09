import Ball from '../components/Ball'
import { createColor, rp, toRad } from '../script/utils'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

let W = (canvas.width = 800)
let H = (canvas.height = 600)
// 正确的方法: const friction = 0.1; speed = speed > friction ? Speed - friction : 0
// 简单的方法: const friction = 0.1; speed *= friction

let angle = toRad(45),
  speed = rp([20, 40]),
  friction = 1
const ball = new Ball({ x: 50, y: 50, r: 40, fillStyle: createColor() }).render(ctx)

;(function loop() {
  window.requestAnimationFrame(loop)

  ctx.clearRect(0, 0, W, H)
  // speed = speed > friction ? speed - friction : 0
  if (speed > 0.001) {
    speed = speed *= 0.95
    let vx = Math.cos(angle) * speed
    let vy = Math.sin(angle) * speed
    ball.x += vx
    ball.y += vy
  }

  ball.render(ctx)
})()
