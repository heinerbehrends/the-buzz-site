import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

export interface videoWallScreenProps {
  column: number
  row: number
}

export default function VideoWallScreen({ row, column }: videoWallScreenProps) {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "videowall-border.png" }) {
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
      style={{ zIndex: -1, gridArea: `${row} / ${column}` }}
    />
  )
}
