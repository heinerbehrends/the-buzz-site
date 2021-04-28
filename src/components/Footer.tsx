import React from "react"
import styled from "styled-components"
import SocialContact from "./SocialContact"
import FacebookIcon from "./FacebookIcon"
import EmailIcon from "./EmailIcon"

const FooterContainer = styled.footer`
  padding-top: 64px;
  padding-bottom: 48px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.01) 100%
  );
`

export default function Footer() {
  return (
    <FooterContainer>
      <SocialContact
        icon={<EmailIcon />}
        link={"mailto:werethebuzz@gmail.com"}
        linkText={"werethebuzz@gmail.com"}
      />
      <SocialContact
        icon={<FacebookIcon />}
        link={"https://www.facebook.com/werethebuzz"}
        linkText={"facebook.com/werethebuzz"}
      />
    </FooterContainer>
  )
}
