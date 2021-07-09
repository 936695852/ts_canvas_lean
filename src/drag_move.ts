import Ball from '../components/Ball'
import Arrow from '../components/Arrow'
import { createColor, getOffset, rp, toRad } from '../script/utils'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

let W = (canvas.width = 800)
let H = (canvas.height = 600)

let mouse = getOffset(canvas)
let easing = 0.05,
  isMouseMove = false

const arrow = new Arrow({
  x: W / 2,
  y: H / 2,
  w: 120,
  h: 50,
  fillStyle: createColor(),
  strokeStyle: createColor(),
}).render(ctx)

const ball = new Ball({
  x: 50,
  y: 50,
  r: 40,
  fillStyle: createColor(),
  strokeStyle: createColor(),
}).render(ctx)

function ballMoveFn(e: MouseEvent) {
  ball.x = mouse.x
  ball.y = mouse.y
}

function ballUpFn(e: MouseEvent) {
  isMouseMove = false
  canvas.removeEventListener('mousemove', ballMoveFn)
  canvas.removeEventListener('mouseup', ballUpFn)
}

canvas.addEventListener('mousedown', function (e: MouseEvent) {
  if (ball.isPoint(mouse)) {
    isMouseMove = true
    canvas.addEventListener('mousemove', ballMoveFn)
    canvas.addEventListener('mouseup', ballUpFn)
  }
})

function dragBallFn() {
  if (!isMouseMove) {
    let vx = (W / 2 - ball.x) * easing
    let vy = (H / 2 - ball.y) * easing
    ball.x += vx
    ball.y += vy
  }
  ball.render(ctx)
}
function moveArrowFn() {
  let dx = mouse.x - arrow.x
  let dy = mouse.y - arrow.y

  let angle = Math.atan2(dy, dx)

  arrow.x += dx * easing
  arrow.y += dy * easing
  arrow.rotation = angle

  arrow.render(ctx)
}
;(function drawFrame() {
  window.requestAnimationFrame(drawFrame)
  ctx.clearRect(0, 0, W, H)
  moveArrowFn()
  dragBallFn()
})()
