import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function FacebookIcon() {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "buzz-facebook-66.png" }) {
          id
          childImageSharp {
            fluid(maxWidth: 120) {
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
      imgStyle={{ height: "120px", objectFit: "contain" }}
    />
  )
}