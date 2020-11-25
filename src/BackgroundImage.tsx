import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

export function Background({ position }: backgroundProps) {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "Videowall.jpg" }) {
          id
          childImageSharp {
            fluid(maxWidth: 768, jpegQuality: 60) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  return (
    <Img
      style={{
        gridArea: "1 / 1",
        zIndex: -1,
        willChange: "translate",
        transform: `translateY(${-0.25 * position}px)`,
        transition: "transform 0s",
      }}
      fluid={data.file.childImageSharp.fluid}
    />
  )
}

interface backgroundProps {
  position: number
}

export const BackgroundStyled = styled(Background)<backgroundProps>`
  grid-area: 1 / 1;
`
