import React, { useEffect, useState } from "react"
import useAudio from "react-use/lib/useAudio"
import ProgressBar from "./ProgressBar"
import Volume from "./Volume"
import { PlayerContainer } from "../styles/playerGradientStyles"
import { PlayButtonStyled, VolumeButtonStyled } from "../styles/buttonStyles"
import { TimeDisplayStyled } from "../styles/playerStyles"

function getBufferdTime(bufferState: any[]): number {
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
    <audio onEnded={playNextSong} id={`${id}`} src={audioFile} />
  )
  const { paused, time, duration, buffered, volume, muted } = state
  const { play, pause, seek, volume: setVolume, unmute, mute } = controls
  const [percentElapsed, setElapsed] = useState(0)
  const [percentBuffered, setBuffered] = useState(0)

  useEffect(() => {
    // calculate percentages in hook to allow for ssr
    const percentElapsed = (time / duration) * 100
    setElapsed(percentElapsed)
    const percentBuffered = (getBufferdTime(buffered) / duration) * 100
    setBuffered(percentBuffered)
  })
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
          id={id}
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
        {audio}
      </PlayerContainer>
    </>
  )
}

function playNextSong(
  event: React.SyntheticEvent<HTMLAudioElement, Event>
): void {
  // Get song number
  const playerId = (event.target as HTMLAudioElement).getAttribute("id")
  // select the next and click it if is exists
  const button = document.getElementById(`${Number(playerId) + 1}`).parentNode
    .firstChild as HTMLButtonElement
  if (button) {
    button.click()
  }
  // reset elapsed bar
  ;(document.getElementById(
    `elapsed${playerId}`
  ) as HTMLDivElement).style.width = "0%"
}
