import React from "react"
import {
  VolumeBarContainer,
  VolumeBar,
  VolumeBarBackground,
  VolumeBarControls,
} from "../styles/volumeStyle"

type volumeProps = {
  volume: number
  setVolume: Function
}

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
