import React, { useState } from "react"
import BuzzPlayer from "./BuzzPlayer"

export interface song {
  mp3: string
  title: string
  credits: string
}

type multiplePlayersProps = {
  songs: song[]
}

export default function MultiplePlayers({
  songs,
}: multiplePlayersProps): JSX.Element {
  const [playingId, setPlayingId] = useState(null)
  return (
    <>
      {songs.map((song, id) => (
        <BuzzPlayer
          id={id}
          mp3={song.mp3}
          playingId={playingId}
          setPlayingId={setPlayingId}
          title={song.title}
          credits={song.credits}
        />
      ))}
    </>
  )
}
