import React from "react"
import CustomPlayer from "./CustomPlayer"
import { SongTitle } from "../styles/headingStyles"
import { CreditsContainer } from "../styles/playerGradientStyles"
import { PlayerLink, Credits, MetaLeftContainer } from "../styles/playerStyles"
import Heart from "./Heart"
import Share from "./Share"
import Download from "./Download"
import SongInfo from "./SongInfo"

type BuzzPlayerProps = {
  mp3: string
  title: string
  credits: string
  id: number
  playingId: number
  setPlayingId: React.Dispatch<React.SetStateAction<number>>
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
}: BuzzPlayerProps): JSX.Element {
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
          <Share />
          <Download href={mp3} />
          <SongInfo credits={credits} />
        </MetaLeftContainer>
      </CreditsContainer>
    </section>
  )
}
