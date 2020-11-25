import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "header.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 768, jpegQuality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <Img fluid={data.file.childImageSharp.fluid} />
}
