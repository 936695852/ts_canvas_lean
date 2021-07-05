import Ball from '../components/Ball'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

let W = (canvas.width = 800)
let H = (canvas.height = 600)

const ball = new Ball({ x: W / 2, y: H / 10, r: 20 }).render(ctx)
const ball2 = new Ball({ x: W / 2, y: H / 10, r: 20 }).render(ctx)
const ball3 = new Ball({ x: W / 2, y: H / 1.3, r: 50 }).render(ctx)
//ball1
let angle = 0 // 起始弧度
const SWING = 260 // 振幅

// ball2
let vx = 1

// ball3
let initScale = 1

;(function move() {
  window.requestAnimationFrame(move)
  ctx.clearRect(0, 0, W, H)
  ball.x = W / 2 + Math.sin(angle) * SWING
  angle += 0.05
  angle %= Math.PI * 2
  ball.render(ctx)

  ball2.x += vx
  ball2.y = H / 2.5 + Math.sin(angle) * (SWING - 200)
  ball2.render(ctx)

  // 脉冲运动
  ball3.scaleX = ball3.scaleY = initScale + Math.sin(angle) * 0.2
  ball3.render(ctx)
})()
