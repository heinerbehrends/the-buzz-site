import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { videoWallScreenProps } from "./VideoWallScreen"

export default function VideoWallNoise({
  row,
  column,
}: videoWallScreenProps): JSX.Element {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "tv-static.png" }) {
          id
          childImageSharp {
            fluid(maxWidth: 192) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  return (
    <Img
      fluid={data.file.childImageSharp.fluid}
      style={{ zIndex: -3, gridArea: `${row} / ${column}` }}
      loading={"eager"}
    />
  )
}
