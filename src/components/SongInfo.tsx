import React, { useState } from "react"
import InfoIcon from "../icons/info.svg"
import { Credits, IconButton } from "../styles/playerStyles"

export default function SongInfo({ credits }: { credits: string }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <IconButton onClick={() => setIsOpen(!isOpen)}>
        <InfoIcon style={{ fill: "white", opacity: 0.75 }} />
      </IconButton>
      {isOpen ? (
        <Credits>
          {`Music by ${credits}`}
          <br /> Words by Leon van de Vendel
        </Credits>
      ) : null}
    </>
  )
}
