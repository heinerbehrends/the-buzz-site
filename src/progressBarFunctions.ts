
interface seekToOptions {
  event: React.MouseEvent
  duration: number
  setTime: Function
}
export function seekTo({ event, duration, setTime }: seekToOptions) {
  const width = (event.target as HTMLDivElement).offsetWidth
  const clickPosition = event.clientX
  const elementPosition = (event.target as HTMLDivElement).offsetLeft
  const timeToSeekTo = ((clickPosition - elementPosition) / width) * duration

  setTime(timeToSeekTo)
}
export function handleDragStart(event) {
  event.dataTransfer.setDragImage(document.getElementById("invisible"), 0, 0)
}

export function handleDrag(event: React.DragEvent, move: Function) {
  const element = event.target as HTMLSpanElement
  const parentWidth = element.parentElement.clientWidth
  const parentPosition = element.parentElement.offsetLeft
  const currentPosition = event.clientX
  const initialPosition = element.offsetLeft

  const boundaryLeft = parentPosition - initialPosition
  const boundaryRight = boundaryLeft + parentWidth
  const offset = currentPosition - initialPosition

  if (offset < boundaryLeft) {
    move(boundaryLeft)
    return
  }
  if (offset > boundaryRight) {
    move(boundaryRight)
    return
  }
  move(offset)
}

interface handleDragEndOptions {
  event: React.DragEvent
  duration: number
  setTime: Function
  move: Function
}
export function handleDragEnd({
  event,
  duration,
  setTime,
  move,
}: handleDragEndOptions) {
  const width = (event.target as HTMLSpanElement).parentElement.clientWidth
  const clickPosition = event.clientX
  const elementPosition = (event.target as HTMLSpanElement).parentElement
    .offsetLeft
  const timeToSeekTo = ((clickPosition - elementPosition) / width) * duration
  setTime(timeToSeekTo)
  move(0)
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