import React, { useEffect, useState } from "react"
import BuzzPlayer from "./BuzzPlayer"
import { songs } from "../songs"

export type song = {
  mp3: string
  title: string
  credits: string
}
export type HeartType = { title: string; count: number }

function MultiplePlayers(): JSX.Element {
  const initialHearts = songs.map(({ title }) => ({ title, count: 0 }))
  const [hearts, setHearts] = useState<HeartType[]>(initialHearts)
  const [playingId, setPlayingId] = useState(0)

  useEffect(() => {
    fetch("/.netlify/functions/get-initial-hearts", {
      method: "POST",
      body: JSON.stringify({
        songs: initialHearts,
      }),
    })
      .then(res => res.json())
      .then(({ hearts }) => setHearts(hearts.returning))
  }, [])

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
          hearts={hearts.find(hearts => hearts.title === song.title)?.count!}
          setHearts={setHearts}
        />
      ))}
    </section>
  )
}

export default React.memo(MultiplePlayers)
