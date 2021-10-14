import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function EmailIcon() {
  return (
    <div style={{ width: "60px", height: "50px" }}>
      <StaticImage
        src="../images/the-buzz-email.png"
        alt="email icon"
        style={{ padding: 0 }}
        placeholder="none"
      />
    </div>
  )
}
