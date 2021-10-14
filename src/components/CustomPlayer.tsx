import React, { useEffect, useState } from "react"
import useAudio from "react-use/lib/useAudio"
import ProgressBar from "./ProgressBar"
import Volume from "./Volume"
import { PlayerContainer } from "../styles/playerGradientStyles"
import { PlayButtonStyled, VolumeButtonStyled } from "../styles/buttonStyles"
import { TimeDisplayStyled } from "../styles/playerStyles"

interface customPlayerProps {
  audioFile: string
  id: number
  isPlaying: null | number
  setIsPlaying: React.Dispatch<React.SetStateAction<number>>
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
  const { paused, time, duration, volume, muted } = state
  const { play, pause, seek, volume: setVolume, unmute, mute } = controls
  const [percentElapsed, setElapsed] = useState(0)
  // because of ssr the calculation starts after the page has loaded
  useEffect(() => {
    const percentElapsed = (time / duration) * 100
    setElapsed(percentElapsed)
  }, [time, duration])
  // stop when a different songs plays
  if (id !== isPlaying) pause()

  return (
    <PlayerContainer>
      <PlayButtonStyled
        paused={paused}
        play={play}
        pause={pause}
        setIsPlaying={setIsPlaying}
        id={id}
      />
      <TimeDisplayStyled time={time} />
      <ProgressBar elapsed={percentElapsed} seek={seek} duration={duration} />
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
  )
}

function playNextSong(
  event: React.SyntheticEvent<HTMLAudioElement, Event>
): void {
  const audioElement = event.target as HTMLAudioElement
  const songNumber = audioElement.getAttribute("id")
  const button = document?.getElementById(`${Number(songNumber) + 1}`)
    ?.parentNode?.firstChild as HTMLButtonElement
  if (button) {
    button.click()
    button.focus()
  }
  audioElement.currentTime = 0
}
