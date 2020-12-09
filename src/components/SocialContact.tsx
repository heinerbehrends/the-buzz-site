import React from "react"
import styled from "styled-components"

const FlexContainer = styled.div`
  display: flex;
  margin-top: 32px;
  place-content: center;
  align-items: center;
  justify-content: center;
  img {
    height: 100px;
  }
  a {
    padding-left: 16px;
    color: rgba(256, 256, 256, 0.8);
    text-shadow: 0.05em 0.05em 0.03em #000;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`

export default function SocialContact({ icon, link, linkText }) {
  return (
    <FlexContainer>
      {icon}
      <a href={link}>{linkText}</a>
    </FlexContainer>
  )
}
