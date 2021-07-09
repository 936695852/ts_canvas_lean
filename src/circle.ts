import Ball from '../components/Ball'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

let W = (canvas.width = 800)
let H = (canvas.height = 600)

const ball = new Ball({ x: W / 2, y: H / 2, r: 20, fillStyle: 'pink' }).render(ctx)
const ball2 = new Ball({ x: W / 2, y: H / 2, r: 20, fillStyle: 'pink' }).render(ctx)

let angle = 0,
  speed = 0.02,
  r = 100

// 椭圆 韦达定理  ax^2 + bx + c = 0
let rx = 100,
  ry = 40
// 两个焦点F1,F2距离之和等于常数 = 2a 焦点之间的距离叫做焦距
// F1 F2 = 2a时 轨迹为直线2a, F1 F2 > 2a时 不存在
// 焦点在x轴的椭圆 矮胖型  焦点在y轴的椭圆 瘦高型
// 椭圆标准方程 x^2/a^2 + y^2/b^2 = 1 (a>b>0)  焦距 就 √(x+c)^2 + y^2 + √(x-c)^2 + y^2
// a 长半轴长；b 短半轴长；c 半焦距长
// 椭圆离心率 焦距长/长轴长之比 e = 2a/2c = a/c

;(function move() {
  window.requestAnimationFrame(move)
  ctx.clearRect(0, 0, W, H)

  ctx.beginPath()
  ctx.arc(W / 2, H / 3, r, 0, Math.PI * 2)
  ctx.stroke()
  ball.x = W / 2 + r * Math.cos(angle)
  ball.y = H / 3 + r * Math.sin(angle)
  angle += speed
  angle %= Math.PI * 2
  ball.render(ctx)

  // 椭圆
  ctx.save()
  ctx.translate(W / 2, H / 1.42)
  ctx.scale(1, 0.4)
  ctx.beginPath()
  ctx.arc(0, 0, rx, 0, Math.PI * 2) // x = a * cos(angle)  y = b * sin(angle)
  ctx.stroke()
  ctx.restore()
  ball2.x = W / 2 + rx * Math.cos(angle)
  ball2.y = H / 1.42 + ry * Math.sin(angle)

  ball2.render(ctx)
})()
