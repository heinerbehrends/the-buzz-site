import React from "react"
import styled from "styled-components"
import VideoWallNoise from "./VideoWallNoise"
import VideoWallScreen from "./VideoWallScreen"
import { Container } from "../styles/pageStyles"
import VideoWallPic01 from "./VideoWallPic01"
import VideoWallPic02 from "./VideoWallPic02"
import VideoWallPic03 from "./VideoWallPic03"
import VideoWallPic04 from "./VideoWallPic04"

const VideoWallContainer = styled.div`
  grid-area: 1 / 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
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
  position: number
}

export default function VideoWall({ position }: videoWallProps): JSX.Element {
  return (
    <VideoWallContainer
      style={{
        gridArea: "1 / 1",
        zIndex: -1,
        // transition: "transform 0.05s",
        transform: `translateY(${-0.1 * position}px)`,
      }}
    >
      <Screens columns={4} rows={24} />
      <VideoWallPic01 />
      <VideoWallPic02 />
      <VideoWallPic03 />
      <VideoWallPic04 />
      <NoiseScreens columns={4} rows={24} />
    </VideoWallContainer>
  )
}
