import React from "react"
import styled from "styled-components"
import SocialContact from "./SocialContact"
import FacebookIcon from "./FacebookIcon"
import EmailIcon from "./EmailIcon"

const FooterContainer = styled.footer`
  padding-top: 64px;
  background-color: rgba(0, 0, 0, 0.4);
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
