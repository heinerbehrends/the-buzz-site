import React from "react"
import styled from "styled-components"

const StyledHeader = styled.h1`
  margin: 0 auto;
  letter-spacing: -0.07em;
  padding: 0.3em 0 0.1em 0;
  font-size: 9vw;
  font-weight: 800;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5));
  @media screen and (min-width: 768px) {
    font-size: 69px;
  }
`

export default function Heading() {
  return <StyledHeader>what's the Buzz all about?</StyledHeader>
}
