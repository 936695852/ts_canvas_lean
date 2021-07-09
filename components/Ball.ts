import Base, { Props } from './base'

export default class Ball extends Base {
  constructor(props: Props) {
    super(props)
  }
  render(ctx: CanvasRenderingContext2D) {
    const { x, y, r, scaleX, scaleY, fillStyle, strokeStyle, alpha } = this
    ctx.save()
    ctx.translate(x, y)
    ctx.scale(scaleX, scaleY)
    ctx.fillStyle = fillStyle
    ctx.strokeStyle = strokeStyle
    ctx.globalAlpha = alpha
    ctx.beginPath()
    ctx.arc(0, 0, r, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()
    ctx.restore()
    return this
  }

  isPoint(pos: { x: number; y: number }): boolean {
    const { x, y } = pos
    return this.r >= Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2)
  }
}
