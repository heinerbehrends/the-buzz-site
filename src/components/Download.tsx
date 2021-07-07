import React from "react"
import DownloadIcon from "../icons/download.svg"
import { IconButton } from "../styles/playerStyles"

export default function Download({ href }: { href: string }) {
  return (
    <IconButton title="Download this song" as={"a"} href={href} download>
      <DownloadIcon style={{ fill: "white", opacity: "0.75" }} />
    </IconButton>
  )
}
