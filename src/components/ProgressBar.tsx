import React, { useState } from "react"
import { handleMouseDown, seekTo } from "../progressBarFunctions"
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
  const [offset, setOffset] = useState(0)
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
        onMouseDown={event =>
          handleMouseDown({ event: event, setOffset, duration, seek })
        }
        offset={offset}
        elapsed={elapsed}
      />
    </ProgressBarContainer>
  )
}
