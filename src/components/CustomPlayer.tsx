import React from "react"
import useAudio from "react-use/lib/useAudio"
import ProgressBar from "./ProgressBar"
import PlayButton from "./PlayButton"
import TimeDisplay from "./TimeDisplay"
import Volume from "./Volume"
import VolumeButton from "./VolumeButton"
import { PlayerContainer } from "../styles/playerGradientStyles"

function getBufferdTime(bufferState: any[]) {
  if (!bufferState[0]) {
    return 0
  }
  return bufferState[bufferState.length - 1].end
}

type customPlayerProps = {
  audioFile: string
  id: number
  isPlaying: null | number
  setIsPlaying: Function
}

export default function CustomPlayer({
  audioFile,
  id,
  isPlaying,
  setIsPlaying,
}: customPlayerProps): JSX.Element {
  const [audio, state, controls] = useAudio(
    <audio id={`${id}`} src={audioFile} />
  )
  const { paused, time, duration, buffered, volume, muted } = state
  const { play, pause, seek, volume: setVolume, unmute, mute } = controls
  const percentElapsed = (time / duration) * 100
  const percentBuffered = (getBufferdTime(buffered) / duration) * 100
  if (id !== isPlaying) pause()
  return (
    <>
      <PlayerContainer>
        <PlayButton
          paused={paused}
          play={play}
          pause={pause}
          setIsPlaying={setIsPlaying}
          id={id}
        />
        <TimeDisplay
          style={{
            marginRight: "16px",
            fontWeight: 500,
            textShadow: "0.05em 0.05em 0.03em #000",
          }}
          time={time}
        />
        <ProgressBar
          elapsed={percentElapsed}
          buffered={percentBuffered}
          seek={seek}
          duration={duration}
        />
        <TimeDisplay time={duration} />
        <VolumeButton
          muted={muted}
          mute={mute}
          unmute={unmute}
          volume={volume}
        />
        <Volume volume={volume} setVolume={setVolume} />
      </PlayerContainer>
      {audio}
    </>
  )
}
