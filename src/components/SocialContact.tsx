import React from "react"
import styled from "styled-components"
import { hoverStyle } from "../styles/playerStyles"

const SocialContainer = styled.a`
  display: flex;
  padding-bottom: 32px;
  place-content: center;
  align-items: center;
  justify-content: center;
  span {
    padding-left: 16px;
  }
  color: rgba(256, 256, 256, 0.8);
  text-decoration: none;
  ${hoverStyle}
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

type SocialContactProps = {
  icon: JSX.Element
  link: string
  linkText: string
}

export default function SocialContact({
  icon,
  link,
  linkText,
}: SocialContactProps) {
  return (
    <SocialContainer href={link}>
      {icon}
      <span>{linkText}</span>
    </SocialContainer>
  )
}
