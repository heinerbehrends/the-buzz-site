interface seekToOptions {
  event: React.MouseEvent
  duration: number
  setTime: Function
}

export function seekTo({ event, duration, setTime }: seekToOptions): void {
  const element = event.target as HTMLDivElement
  const width = element.offsetWidth
  const clickPosition = event.clientX
  const elementPosition = element.getBoundingClientRect().left
  const timeToSeekTo = ((clickPosition - elementPosition) / width) * duration

  setTime(timeToSeekTo)
}
export function handleDragStart(event): void {
  event.dataTransfer.setDragImage(document.getElementById("invisible"), 0, 0)
}

export function handleMouseDown({event, setOffset, duration, seek}): void {
  event.preventDefault()
  const element = event.target as HTMLSpanElement
  const parent = event.target.parentElement as HTMLDivElement
  const positionOnHandle = event.clientX - element.getBoundingClientRect().left
  const parentPosition = parent.getBoundingClientRect().left
  const parentWidth = parent.offsetWidth
  const positionOnBar = element.offsetLeft - parent.offsetLeft
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
  
  function onMouseMove(event) {
    let offset = event.clientX - positionOnHandle - parentPosition - positionOnBar + (element.offsetWidth / 2)
    const leftEdge = - positionOnBar
    const rightEdge = parentWidth -  - positionOnBar
    if (offset < leftEdge) {
      offset = leftEdge
    } if (offset > rightEdge) {
      offset = rightEdge
    }
    console.log(offset)
    setOffset(offset)
  }
  function onMouseUp(event) {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
    const clickPosition = event.clientX
    const timeToSeekTo = ((clickPosition - parentPosition) / parentWidth) * duration
    setOffset(0)
    seek(timeToSeekTo)
  }
}

export function throttle(fn: Function, time: number): Function {
  let isWaiting = false
  return function (...args) {
    if (isWaiting) {
      return
    }
    fn(...args)
    isWaiting = true
    setTimeout(function() {
      isWaiting = false
    }, time)
  }
}