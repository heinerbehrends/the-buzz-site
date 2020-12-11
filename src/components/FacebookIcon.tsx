import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function FacebookIcon() {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "the-buzz-facebook.png" }) {
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
    <div style={{ width: "25px", height: "50px" }}>
      <Img fluid={data.file.childImageSharp.fluid} style={{ padding: 0 }} />
    </div>
  )
}
