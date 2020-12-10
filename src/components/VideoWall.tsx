import React from "react"
import styled from "styled-components"
import VideoWallNoise from "./VideoWallNoise"
import VideoWallScreen from "./VideoWallScreen"
import VideoWallPic01 from "./VideoWallPic01"
import VideoWallPic02 from "./VideoWallPic02"
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
            column={(idx % columns) + 1}
            row={Math.floor(idx / columns) + 1}
          />
        ))}
    </>
  )
}

interface videoWallProps {
  id: string
}

export default function VideoWall({ id }: videoWallProps): JSX.Element {
  return (
    <VideoWallContainer id={id}>
      <Screens columns={4} rows={13} />
      <VideoWallPic01 />
      {/* <VideoWallPic02 /> */}
      <VideoWallPic03 />
      <VideoWallPic04 />
      <NoiseScreens columns={4} rows={13} />
    </VideoWallContainer>
  )
}
