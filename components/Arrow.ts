import Base, { Props } from './base'

export default class Arrow extends Base {
  constructor(props: Props) {
    console.log('props: ', props)
    super(props)
  }

  createPath(ctx: CanvasRenderingContext2D) {
    let { w, h } = this
    ctx.beginPath()
    ctx.moveTo(-w / 2, -h / 2)
    ctx.lineTo(w / 10, -h / 2)
    ctx.lineTo(w / 10, -h / 2)
    ctx.lineTo(w / 10, -h)
    ctx.lineTo(w / 2, 0)
    ctx.lineTo(w / 10, h)
    ctx.lineTo(w / 10, h / 2)
    ctx.lineTo(-w / 2, h / 2)
    ctx.closePath()
    return this
  }

  render(ctx: CanvasRenderingContext2D) {
    const { x, y, rotation, fillStyle, strokeStyle } = this
    ctx.save()
    ctx.fillStyle = fillStyle
    ctx.strokeStyle = strokeStyle
    ctx.translate(x, y)
    ctx.rotate(rotation)
    this.createPath(ctx)
    ctx.fill()
    ctx.stroke()
    ctx.restore()
    return this
  }
}
