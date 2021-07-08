export interface Props {
  id?: string
  w?: number
  h?: number
  x?: number
  y?: number
  r?: number
  vx?: number
  vy?: number
  rotation?: number
  alpha?: number
  fillStyle?: string
  strokeStyle?: string
}

export default class Base {
  id: string | null = null
  w: number = 0
  h: number = 0
  x: number = 0
  y: number = 0
  r: number = 0
  vx: number = 0
  vy: number = 0
  scaleX: number = 1
  scaleY: number = 1
  rotation: number = 0
  fillStyle: string = 'rgb(57,119,224)'
  strokeStyle: string = 'rgba(0,0,0,0)'
  alpha: number = 1

  constructor(props: Props) {
    Object.assign(this, props) //初始化
    return this
  }
}
