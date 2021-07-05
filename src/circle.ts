import Ball from '../components/Ball'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

let W = (canvas.width = 800)
let H = (canvas.height = 600)

const ball = new Ball({ x: W / 2, y: H / 2, r: 35 }).render(ctx)

//椭圆

let angle = 0,
  speed = 0.02,
  r = 150

;(function move() {
  window.requestAnimationFrame(move)
  ctx.clearRect(0, 0, W, H)
  ctx.beginPath()
  ctx.arc(W / 2, H / 2, r, 0, Math.PI * 2)
  ctx.stroke()

  ball.x = W / 2 + r * Math.cos(angle)
  ball.y = H / 2 + r * Math.sin(angle)
  angle += speed
  angle %= Math.PI * 2
  ball.render(ctx)
})()
