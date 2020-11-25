import React, { useState } from "react"
import styled from "styled-components"

type statusbarProps = {
  buffered: number
  elapsed: number
  duration: number
  seek: Function
}

export const BarStyles = styled.div`
  grid-area: 1 / 1;
  height: 10px;
  border-radius: 2px;
`
const BackgroundBar = styled(BarStyles)`
  z-index: 1;
  background-color: gray;
`
interface bufferedBarProps {
  buffered: number
}
const BufferedBar = styled(BarStyles)<bufferedBarProps>`
  z-index: 1;
  width: ${props => props.buffered}%;
  background-color: darkgray;
`
interface elapsedBarProps {
  elapsed: number
}
const ElapsedBar = styled(BarStyles)<elapsedBarProps>`
  z-index: 2;
  width: ${props => props.elapsed}%;
  background-color: gainsboro;
`
const ClickableBar = styled(BarStyles)`
  background-color: transparent;
  cursor: pointer;
  z-index: 3;
  height: 40px;
  grid-area: 1 /1;
`
const TimeHandle = styled.span<elapsedBarProps>`
  position: relative;
  grid-area: 1 /1;
  z-index: 4;
  width: 12px;
  height: 12px;
  border-radius: 5px;
  background-color: #fff;
  transform: translateX(-50%);
  left: ${props => props.elapsed}%;
`

const ProgressBarContainer = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  border-radius: 4px;
  margin-right: 20px;
`

export default function ProgressBar({
  buffered,
  elapsed,
  seek,
  duration,
}: statusbarProps): JSX.Element {
  const [offset, setOffset] = useState(0)
  return (
    <ProgressBarContainer>
      <TimeHandle
        draggable
        onDrag={event => {
          setOffset(
            event.clientX - (event.target as HTMLSpanElement).offsetLeft
          )
        }}
        style={{ transform: `translateX(${offset}px)` }}
        onDragEnd={event => console.log(event)}
        elapsed={elapsed}
      />
      <BackgroundBar />
      <BufferedBar buffered={buffered} />
      <ElapsedBar elapsed={elapsed} />
      <ClickableBar
        onClick={event => {
          const width = (event.target as HTMLDivElement).offsetWidth
          const clickPosition = event.clientX
          const elementPosition = (event.target as HTMLDivElement).offsetLeft
          const timeToSeekTo =
            ((clickPosition - elementPosition) / width) * duration
          seek(timeToSeekTo)
        }}
      />
    </ProgressBarContainer>
  )
}
