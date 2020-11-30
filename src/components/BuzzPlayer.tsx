import React from "react"
import CustomPlayer from "./CustomPlayer"
import { SongTitle } from "../styles/headingStyles"
import { CreditsContainer } from "../styles/playerGradientStyles"
import { DownloadLink, Credits } from "../styles/playerStyles"

interface buzzPlayerProps {
  mp3: string
  title: string
  credits: string
  id: number
  playingId: number
  setPlayingId: Function
}

export default function BuzzPlayer({
  mp3,
  title,
  credits,
  id,
  playingId,
  setPlayingId,
}: buzzPlayerProps): JSX.Element {
  return (
    <>
      <SongTitle>{title}</SongTitle>
      <CustomPlayer
        audioFile={mp3}
        id={id}
        isPlaying={playingId}
        setIsPlaying={setPlayingId}
      />
      <CreditsContainer>
        <DownloadLink href={mp3} download>
          Download mp3
        </DownloadLink>
        <Credits>
          {`Music by ${credits}`}
          <br /> Words by Leon van de Vendel
        </Credits>
      </CreditsContainer>
    </>
  )
}
