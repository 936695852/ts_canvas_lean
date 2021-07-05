import { getOffset } from '../script/utils'
import Arrow from '../components/Arrow'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

let W = (canvas.width = 800)
let H = (canvas.height = 600)

let mouse = getOffset(canvas)

const arrow = new Arrow({ x: W / 2, y: H / 2, w: 180, h: 60 }).render(ctx)

canvas.onmousemove = () => {
  let dx = mouse.x - arrow.x
  let dy = mouse.y - arrow.y
  arrow.rotation = Math.atan2(dy, dx)

  ctx.clearRect(0, 0, W, H)
  arrow.render(ctx)
}
