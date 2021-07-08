import Ball from '../components/Ball'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

let W = (canvas.width = 800)
let H = (canvas.height = 600)

const ball = new Ball({ x: W / 2, y: H / 2, r: 20, fillStyle: 'pink' }).render(ctx)
