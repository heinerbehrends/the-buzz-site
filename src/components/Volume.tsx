import React from "react"
import {
  VolumeBarContainer,
  VolumeBar,
  VolumeBarBackground,
  VolumeBarControls,
} from "../styles/volumeStyle"

interface volumeProps {
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
          const element = event.target as HTMLDivElement
          const width = element.offsetWidth
          const clickPosition = event.clientX
          const elementPosition = element.getBoundingClientRect().left
          const newVolume = (clickPosition - elementPosition) / width
          setVolume(newVolume)
        }}
      />
    </VolumeBarContainer>
  )
}
