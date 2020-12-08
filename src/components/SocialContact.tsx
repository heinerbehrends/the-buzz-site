import React from "react"
import styled from "styled-components"

const FlexContainer = styled.div`
  display: flex;
  place-content: center;
  background-color: rgba(0, 0, 0, 0.66);
  img {
    height: 100px;
  }
  a {
    color: rgba(256, 256, 256, 0.8);
    text-shadow: 0.05em 0.05em 0.03em #000;
  }
`

export default function SocialContact({ iconLink, link, linkText }) {
  return (
    <FlexContainer>
      <img src={iconLink} />
      <a href={link}>{linkText}</a>
    </FlexContainer>
  )
}
