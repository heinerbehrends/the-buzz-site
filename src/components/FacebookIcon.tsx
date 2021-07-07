import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function FacebookIcon() {
  return (
    <div style={{ width: "25px", height: "50px" }}>
      <StaticImage
        src="../images/the-buzz-facebook.png"
        alt="Facebook icon"
        style={{ padding: 0 }}
      />
    </div>
  )
}
