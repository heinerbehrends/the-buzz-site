import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function VideoWallPic04() {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "video-wall-pic-04.jpg" }) {
          id
          childImageSharp {
            fluid(maxWidth: 576) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )
  return (
    <Img
      fluid={data.file.childImageSharp.fluid}
      style={{ zIndex: -2, gridArea: "5 / 1 / 8 / 4" }}
    />
  )
}
