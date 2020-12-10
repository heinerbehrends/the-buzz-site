import React, { useState } from "react"
import { handleMouseDown, seekTo, throttle } from "../progressBarFunctions"
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
  id: number
}

export default function ProgressBar({
  buffered,
  elapsed,
  seek,
  duration,
  id,
}: statusbarProps): JSX.Element {
  const [offset, setOffsetUnthrottled] = useState(0)
  const setOffset = throttle(setOffsetUnthrottled, 500)
  return (
    <ProgressBarContainer>
      <Invisible id="invisible" />
      <BackgroundBar />
      <BufferedBar buffered={buffered} />
      <ElapsedBar id={`elapsed${id}`} style={{ width: `${elapsed}%` }} />
      <ClickableBar
        onClick={event => seekTo({ event, duration, setTime: seek })}
      />
      <TimeHandle
        onMouseDown={event =>
          handleMouseDown({ event, setOffset: setOffset, duration, seek })
        }
        offset={offset}
        elapsed={elapsed}
      />
    </ProgressBarContainer>
  )
}
