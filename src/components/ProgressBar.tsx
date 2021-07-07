import React, { useRef } from "react"
import { seekTo } from "../progressBarFunctions"
import {
  ProgressBarContainer,
  Invisible,
  BackgroundBar,
  ElapsedBar,
  ClickableBar,
} from "../styles/progressBarStyles"

interface statusbarProps {
  elapsed: number
  duration: number
  seek: (time: number) => void
}

export default function ProgressBar({
  elapsed,
  seek,
  duration,
}: statusbarProps): JSX.Element {
  const container: { current: HTMLDivElement | null } = useRef(null)
  return (
    <ProgressBarContainer ref={container}>
      <Invisible id="invisible" />
      <BackgroundBar />
      <ElapsedBar style={{ width: `${elapsed}%` }} />
      <ClickableBar
        onClick={event => seekTo({ event, duration, setTime: seek })}
      />
    </ProgressBarContainer>
  )
}
