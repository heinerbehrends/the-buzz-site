import React from "react"
import Play from "./icons/play.svg"
import Pause from "./icons/pause.svg"

interface playButtonProps {
  paused: boolean
  play: Function
  pause: Function
  setIsPlaying: Function
  id: number
}

function PlayButton({
  paused,
  play,
  pause,
  setIsPlaying,
  id,
}: playButtonProps): JSX.Element {
  return (
    <button
      style={{}}
      onClick={() => {
        paused ? play() : pause()
        setIsPlaying(id)
      }}
    >
      {paused ? <Play /> : <Pause />}
    </button>
  )
}

export default PlayButton
