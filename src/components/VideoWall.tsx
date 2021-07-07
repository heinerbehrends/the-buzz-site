import React from "react"
import styled from "styled-components"
import VideoWallNoise from "./VideoWallNoise"
import VideoWallScreen from "./VideoWallScreen"
import VideoWallPic01 from "./VideoWallPic01"
import VideoWallPic03 from "./VideoWallPic03"
import VideoWallPic04 from "./VideoWallPic04"

interface videoContainerProps {
  id: string
}

const VideoWallContainer = styled.div<videoContainerProps>`
  grid-area: 1 / 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  max-width: 768px;
  margin: 0 auto;
  grid-area: 1 / 1;
  z-index: -1;
  will-change: transform;
`

interface screensProps {
  columns: number
  rows: number
}

function Screens({ columns, rows }: screensProps): JSX.Element {
  return (
    <>
      {Array(columns * rows)
        .fill("1")
        .map((el, idx) => (
          <VideoWallScreen
            key={idx}
            column={(idx % columns) + 1}
            row={Math.floor(idx / columns) + 1}
          />
        ))}
    </>
  )
}

function NoiseScreens({ columns, rows }: screensProps): JSX.Element {
  return (
    <>
      {Array(columns * rows)
        .fill("1")
        .map((el, idx) => (
          <VideoWallNoise
            key={idx}
            column={(idx % columns) + 1}
            row={Math.floor(idx / columns) + 1}
          />
        ))}
    </>
  )
}

interface videoWallProps {
  id: string
  bodyHeight: number
  bodyWidth: number
}

function VideoWall({ id, bodyHeight, bodyWidth }: videoWallProps): JSX.Element {
  function calculateRows(width: number, height: number) {
    const SCREEN_RATIO = 1.2522
    const SCREEN_WIDTH = 153.33
    if (!width) {
      return 1
    }
    if (width >= 768) {
      return Math.floor(height / SCREEN_WIDTH)
    }
    return Math.floor(width / 4 / SCREEN_RATIO)
  }
  const rows = calculateRows(bodyWidth, bodyHeight)
  return (
    <VideoWallContainer id={id}>
      <Screens columns={4} rows={rows} />
      <VideoWallPic01 />
      <VideoWallPic03 />
      <VideoWallPic04 />
      <NoiseScreens columns={4} rows={rows} />
    </VideoWallContainer>
  )
}

export default React.memo(
  VideoWall,
  (prevProps, nextProps) =>
    prevProps.bodyHeight === nextProps.bodyHeight &&
    prevProps.bodyWidth === nextProps.bodyWidth
)
