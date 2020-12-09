import React from "react"
import useAudio from "react-use/lib/useAudio"
import ProgressBar from "./ProgressBar"
import Volume from "./Volume"
import { PlayerContainer } from "../styles/playerGradientStyles"
import { PlayButtonStyled, VolumeButtonStyled } from "../styles/buttonStyles"
import { TimeDisplayStyled } from "../styles/playerStyles"

function getBufferdTime(bufferState: any[]) {
  if (!bufferState[0]) {
    return 0
  }
  return bufferState[bufferState.length - 1].end
}

interface customPlayerProps {
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
        <PlayButtonStyled
          paused={paused}
          play={play}
          pause={pause}
          setIsPlaying={setIsPlaying}
          id={id}
        />
        <TimeDisplayStyled time={time} />
        <ProgressBar
          elapsed={percentElapsed}
          buffered={percentBuffered}
          seek={seek}
          duration={duration}
        />
        <TimeDisplayStyled time={duration} />
        <VolumeButtonStyled
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
