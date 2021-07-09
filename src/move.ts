import Ball from '../components/Ball'
import { idText } from '../node_modules/typescript/lib/typescript'
import { createColor, getOffset, rp, toRad } from '../script/utils'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

let W = (canvas.width = 800)
let H = (canvas.height = 600)

let easing = 0.05,
  targetX = W / 2,
  targetY = H / 2

const ball = new Ball({
  x: 80,
  y: 80,
  r: 40,
  fillStyle: createColor(),
  strokeStyle: createColor(),
}).render(ctx)

;(function drawFrame() {
  window.requestAnimationFrame(drawFrame)
  ctx.clearRect(0, 0, W, H)

  ball.x += (targetX - ball.x) * easing
  ball.y += (targetY - ball.y) * easing
  ball.render(ctx)
})()
