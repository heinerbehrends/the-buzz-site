import React from "react"
import CustomPlayer from "./CustomPlayer"
import { SongTitle } from "../styles/headingStyles"
import { CreditsContainer } from "../styles/playerGradientStyles"
import {
  DownloadLink,
  Credits,
  MetaLeftContainer,
} from "../styles/playerStyles"
import Heart from "./Heart"
import { HeartType } from "./MultiplePlayers"

type buzzPlayerProps = {
  mp3: string
  title: string
  credits: string
  id: number
  playingId: number
  setPlayingId: Function
  hearts: number
}

export default function BuzzPlayer({
  mp3,
  title,
  credits,
  id,
  playingId,
  setPlayingId,
  hearts,
}: buzzPlayerProps): JSX.Element {
  return (
    <section id={title.replace(/ /g, "-").toLowerCase()}>
      <SongTitle>{title}</SongTitle>
      <CustomPlayer
        audioFile={mp3}
        id={id}
        isPlaying={playingId}
        setIsPlaying={setPlayingId}
      />
      <CreditsContainer>
        <MetaLeftContainer>
          <Heart title={title} count={hearts} />
          <DownloadLink href={mp3} download>
            Download
          </DownloadLink>
        </MetaLeftContainer>
        <Credits>
          {`Music by ${credits}`}
          <br /> Words by Leon van de Vendel
        </Credits>
      </CreditsContainer>
    </section>
  )
}
