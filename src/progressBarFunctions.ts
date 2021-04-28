type seekToOptions = {
  event: React.MouseEvent
  duration: number
  setTime: (time: number) => void
}

export function seekTo({ event, duration, setTime }: seekToOptions): void {
  const element = event.target as HTMLDivElement
  const width = element.offsetWidth
  const clickPosition = event.clientX
  const elementPosition = element.getBoundingClientRect().left
  const timeToSeekTo = ((clickPosition - elementPosition) / width) * duration

  setTime(timeToSeekTo)
}

export function throttle(fn: Function, time: number): Function {
  let isWaiting = false
  return function (...args) {
    if (isWaiting) {
      return
    }
    fn(...args)
    isWaiting = true
    setTimeout(() => {
      isWaiting = false
    }, time)
  }
}
