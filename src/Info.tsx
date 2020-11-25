import React from "react"
import styled from "styled-components"

const Paragraph = styled.p`
  color: rgba(256, 256, 256, 0.8);
  font-weight: 500;
  text-shadow: 0.05em 0.05em 0.03em #000;
  padding: 0;
  margin: 0;
  margin: 0;
  padding: 0 1.2em 0.3em 1.2em;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  text-shadow: 0.05em 0.05em 0.03em #000;
  line-height: 150%;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    padding: 0 32px 12px 32px;
  }
`

export default function Info(props) {
  return (
    <Paragraph>
      The Buzz’s trademark are songs that are influenced by the post punk and
      new wave era. Leon and Heiner met in Groningen, where they had already
      earned their credits in bands as diverse as De Gringos and Cosmic Spring.
      The songs are driven by 1980's drum machine tracks and powerful bass
      guitar and complemented by swirling vintage synths, Heiner’s raw guitars
      and Leon’s powerful vocals.
    </Paragraph>
  )
}
