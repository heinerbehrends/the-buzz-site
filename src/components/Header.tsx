import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function Header(): JSX.Element {
  return <StaticImage src="../images/header.png" alt="" />
}

export default React.memo(Header)
