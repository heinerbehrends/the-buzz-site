import React from "react"
import Play from "../icons/play.svg"
import Pause from "../icons/pause.svg"

interface playButtonProps {
  paused: boolean
  play: Function
  pause: Function
  setIsPlaying: Function
  id: number
  className?: string
}

function PlayButton({
  paused,
  play,
  pause,
  setIsPlaying,
  id,
  className,
}: playButtonProps): JSX.Element {
  return (
    <button
      style={{ padding: "1rem" }}
      onClick={() => {
        paused ? play() : pause()
        setIsPlaying(id)
      }}
      className={className}
    >
      {paused ? (
        <Play className={className} />
      ) : (
        <Pause className={className} />
      )}
    </button>
  )
}

export default PlayButton
