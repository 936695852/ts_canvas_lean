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
