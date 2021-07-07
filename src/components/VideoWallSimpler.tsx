import React from "react"
import styled from "styled-components"
import VideoWallNew from "./VideoWallNew"
import VideoWallRow from "./VideoWallRow"

interface videoContainerProps {
  id: string
}

const VideoWallContainer = styled.div<videoContainerProps>`
  grid-area: 1 / 1;
  display: grid;
  max-width: 768px;
  margin: 0 auto;
  grid-area: 1 / 1;
  z-index: -1;
  will-change: transform;
`

interface videoWallProps {
  id: string
  bodyHeight: number
  bodyWidth: number
}

function VideoWall({ id, bodyHeight, bodyWidth }: videoWallProps): JSX.Element {
  function calculateRows(width: number, height: number) {
    const SCREEN_RATIO = 1.2522
    const STANDARD_NR_OF_ROWS = 14
    if (!width) {
      return 1
    }
    if (width >= 768) {
      return STANDARD_NR_OF_ROWS
    }
    // body height devided by screen height
    return Math.floor(height / (width / 4 / SCREEN_RATIO)) - STANDARD_NR_OF_ROWS
  }
  const rows = calculateRows(bodyWidth, bodyHeight)

  return (
    <VideoWallContainer id={id}>
      <VideoWallNew />
      {[...Array(rows).keys()].map(() => (
        <VideoWallRow />
      ))}
    </VideoWallContainer>
  )
}

export default React.memo(
  VideoWall,
  (prevProps, nextProps) =>
    prevProps.bodyHeight === nextProps.bodyHeight &&
    prevProps.bodyWidth === nextProps.bodyWidth
)
