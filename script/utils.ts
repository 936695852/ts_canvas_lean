interface Mouse {
  x: number
  y: number
}

// 获取鼠标在元素上的坐标
export function getOffset(ele: HTMLCanvasElement): Mouse {
  let mouse = { x: 0, y: 0 }
  ele.addEventListener('mousemove', (event: MouseEvent) => {
    let { pageX, pageY } = event
    let { left, top } = ele.getBoundingClientRect()

    mouse.x = pageX - left
    mouse.y = pageY - top
  })
  return mouse
}

// 生成随机数
export function rp(arr: number[], int?: boolean): number {
  const max = Math.max(...arr)
  const min = Math.min(...arr)
  const num = Math.random() * (max - min) + min
  return int ? Math.round(num) : num
}

// 生成随机颜色
export function createColor(): string {
  return `rgb(${rp([55, 255], true)}, ${rp([55, 255], true)}, ${rp([55, 255], true)})`
}
