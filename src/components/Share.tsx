import React, { useState } from "react"
import ShareIcon from "../icons/share.svg"
import { IconButton, PlayerLink } from "../styles/playerStyles"

export default function Share() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <IconButton onClick={() => setIsOpen(!isOpen)}>
        <ShareIcon
          style={{
            fill: "white",
            opacity: "0.75",
          }}
        />
      </IconButton>
      {isOpen ? (
        <div>
          <PlayerLink
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmodest-snyder-67ce38.netlify.app%2F"
            target="_blank"
          >
            Share on Facebook
          </PlayerLink>
          <br />
          <PlayerLink
            href="https://twitter.com/intent/tweet?&url=https%3A%2F%2Fmodest-snyder-67ce38.netlify.app%2F&text=New+Wave+from+Groningen&hashtags=band,music,newwave"
            target="_blank"
          >
            Share on Twitter
          </PlayerLink>
        </div>
      ) : null}
    </>
  )
}
