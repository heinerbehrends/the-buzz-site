import React, { useState } from "react"
import {
  handleDragStart,
  handleDrag,
  handleDragEnd,
  seekTo,
  throttle,
} from "../progressBarFunctions"
import {
  ProgressBarContainer,
  Invisible,
  TimeHandle,
  BackgroundBar,
  BufferedBar,
  ElapsedBar,
  ClickableBar,
} from "../styles/progressBarStyles"

interface statusbarProps {
  buffered: number
  elapsed: number
  duration: number
  seek: Function
}

export default function ProgressBar({
  buffered,
  elapsed,
  seek,
  duration,
}: statusbarProps): JSX.Element {
  const [offset, setUnthrottledOffset] = useState(0)
  const setOffset = throttle(setUnthrottledOffset, 500)
  return (
    <ProgressBarContainer>
      <Invisible id="invisible" />
      <BackgroundBar />
      <BufferedBar buffered={buffered} />
      <ElapsedBar elapsed={elapsed} />
      <ClickableBar
        onClick={event => seekTo({ event, duration, setTime: seek })}
      />
      <TimeHandle
        draggable
        onDragStart={handleDragStart}
        onDrag={event => handleDrag(event, setOffset)}
        offset={offset}
        style={{ transform: `translateX(${offset - 8}px)` }}
        onDragEnd={event =>
          handleDragEnd({ event, duration, move: setOffset, setTime: seek })
        }
        elapsed={elapsed}
      />
    </ProgressBarContainer>
  )
}
