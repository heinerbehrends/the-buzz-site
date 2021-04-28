import React, { useState } from "react"
import BuzzPlayer from "./BuzzPlayer"
import { songs } from "../songs"

export type song = {
  mp3: string
  title: string
  credits: string
}

function MultiplePlayers(): JSX.Element {
  const [playingId, setPlayingId] = useState(null)
  return (
    <section>
      {songs.map((song, id) => (
        <BuzzPlayer
          id={id}
          key={id}
          mp3={song.mp3}
          playingId={playingId}
          setPlayingId={setPlayingId}
          title={song.title}
          credits={song.credits}
        />
      ))}
    </section>
  )
}

export default MultiplePlayers
