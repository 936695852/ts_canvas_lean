import Ball from '../components/Ball'
import { idText } from '../node_modules/typescript/lib/typescript'
import { createColor, getOffset, rp, toRad } from '../script/utils'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

let W = (canvas.width = 800)
let H = (canvas.height = 600)

let mouse = getOffset(canvas),
  dx = 0,
  dy = 0,
  isMouseMove = false,
  startX = 0,
  startY = 0, // 小球起始位置
  vx = rp([-10, 10]),
  vy = -10,
  gr = 0.2,
  bounce = -0.7 // 反弹系数

const ball = new Ball({
  x: W / 2,
  y: H / 2,
  r: 40,
  fillStyle: createColor(),
  strokeStyle: createColor(),
}).render(ctx)

canvas.addEventListener('mousedown', function (e: MouseEvent): void {
  e.preventDefault()
  if (ball.isPoint(mouse)) {
    isMouseMove = true
    dx = mouse.x - ball.x
    dy = mouse.y - ball.y
    startX - mouse.x
    startY - mouse.y
    canvas.addEventListener('mousemove', moveBallFn)
    canvas.addEventListener('mouseup', upBallFn)
  }
})

function moveBallFn(e: MouseEvent): void {
  ball.x = mouse.x - dx
  ball.y = mouse.y - dy
}

function upBallFn(e: MouseEvent): void {
  isMouseMove = false
  canvas.removeEventListener('mousemove', moveBallFn)
  canvas.removeEventListener('mouseup', upBallFn)
}

function bounceMove() {
  vy += gr
  ball.x += vx
  ball.y += vy

  if (ball.x + ball.r >= W) {
    ball.x = W - ball.r
    vx *= bounce
  } else if (ball.x - ball.r <= 0) {
    ball.x = ball.r
    vx *= bounce
  }

  if (ball.y + ball.r >= H) {
    ball.y = H - ball.r
    vy *= bounce
  } else if (ball.y - ball.r <= 0) {
    ball.y = ball.r
    vy *= bounce
  }
}

function setSpeed() {
  vx = ball.x - startX
  vy = ball.y - startY
  startX = ball.x
  startY = ball.y
}

;(function move(): void {
  window.requestAnimationFrame(move)
  ctx.clearRect(0, 0, W, H)

  if (!isMouseMove) {
    bounceMove()
  } else {
    setSpeed()
  }
  ball.render(ctx)
})()
