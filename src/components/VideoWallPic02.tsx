import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function VideoWallPic02() {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "video-wall-pic-02.jpg" }) {
          id
          childImageSharp {
            fluid(maxWidth: 576) {
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
      style={{ zIndex: -2, gridArea: "7 / 1 / 10 / 4" }}
    />
  )
}
