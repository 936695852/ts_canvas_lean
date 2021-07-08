import { getOffset } from '../script/utils'
import Arrow from '../components/Arrow'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

let W = (canvas.width = 800)
let H = (canvas.height = 600)

let vx = 0,
  vy = 0,
  w = 46,
  h = 20,
  vr = 0, // 角速度
  a = 0 // 加速度

const arrow = new Arrow({ x: W / 2, y: H / 2, w, h }).render(ctx)

window.addEventListener('keydown', function (e: KeyboardEvent) {
  switch (e.key) {
    case 'ArrowLeft':
      vr = -5
      break
    case 'ArrowRight':
      vr = 5
      break
    case 'ArrowUp':
      a = 0.1
      break
  }
})

window.addEventListener('keyup', function (e: KeyboardEvent) {
  a = 0
  vr = 0
  vy = 0
  vx = 0
})
;(function loop() {
  window.requestAnimationFrame(loop)
  ctx.clearRect(0, 0, W, H)
  var ab = (vr * Math.PI) / 180
  arrow.rotation += ab
  let angle = arrow.rotation

  let ax = Math.cos(angle) * a
  let ay = Math.sin(angle) * a
  vx += ax
  vy += ay

  arrow.x += vx
  arrow.y += vy

  if (arrow.x - arrow.w / 2 >= W) {
    arrow.x = 0 - arrow.w / 2
  } else if (arrow.x + arrow.w / 2 <= 0) {
    arrow.x = W + arrow.w / 2
  }

  if (arrow.y - arrow.h / 2 >= H) {
    arrow.y = 0 - arrow.h / 2
  } else if (arrow.y + arrow.h / 2 <= 0) {
    arrow.y = H + arrow.y / 2
  }

  arrow.render(ctx)
})()
