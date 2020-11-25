import React from "react"
import styled from "styled-components"
import CustomPlayer from "./CustomPlayer"

const AudioHeading = styled.h2`
  margin-top: 0.83em;
  margin-bottom: 0;
  font-family: "Rock Salt";
  font-weight: 400;
  font-size: 4vw;
  padding: 0.75vw 0 1vw 6vw;
  text-align: left;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
const Credits = styled.p`
  color: rgba(256, 256, 256, 0.8);
  text-align: right;
  text-align: right;
  font-size: 2.5vw;
  font-family: Helvetica, Arial, sans-serif;
  line-height: 130%;
  padding: 0;
  padding-right: 1.2em;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding-right: 28px;
  }
`

const DownloadLink = styled.a`
  color: rgb(256, 256, 256);
  padding-left: 1.2rem;
  text-decoration: none;
  font-weight: 500;
  text-shadow: 0.05em 0.05em 0.03em #000;
  :hover {
    text-shadow: 0px 0px 0.2em rgb(255 255 255 / 90%);
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

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
}: buzzPlayerProps) {
  return (
    <>
      <AudioHeading>{title}</AudioHeading>
      <CustomPlayer
        audioFile={mp3}
        id={id}
        isPlaying={playingId}
        setIsPlaying={setPlayingId}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <DownloadLink href={mp3} download>
          Download mp3
        </DownloadLink>
        <Credits>
          {`Music by ${credits}`}
          <br /> Words by Leon van de Vendel
        </Credits>
      </div>
    </>
  )
}
