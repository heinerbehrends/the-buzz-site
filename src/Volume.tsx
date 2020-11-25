import React from "react"
import styled from "styled-components"
import { BarStyles } from "./ProgressBar"

type volumeProps = {
  volume: number
  setVolume: Function
}

const VolumeBarContainer = styled.div`
  display: grid;
  width: 120px;
  align-items: center;
  overflow: hidden;
`
interface volumeBarProps {
  volume: number
}
const VolumeBar = styled(BarStyles)<volumeBarProps>`
  z-index: 2;
  width: ${props => props.volume * 100}%;
  background-color: gainsboro;
`
const VolumeBarBackground = styled(BarStyles)`
  z-index: 1;
  background-color: gray;
`
const VolumeBarControls = styled.div`
  z-index: 3;
  grid-area: 1 /1;
  cursor: pointer;
  height: 40px;
  width: 100%;
  background-color: transparent;
`

export default function Volume({
  volume,
  setVolume,
}: volumeProps): JSX.Element {
  return (
    <VolumeBarContainer>
      <VolumeBar volume={volume} />
      <VolumeBarBackground />

      <VolumeBarControls
        onClick={event => {
          const width = (event.target as HTMLDivElement).offsetWidth
          const clickPosition = event.clientX
          const elementPosition = (event.target as HTMLDivElement).offsetLeft
          const newVolume = (clickPosition - elementPosition) / width
          setVolume(newVolume)
        }}
      />
    </VolumeBarContainer>
  )
}
