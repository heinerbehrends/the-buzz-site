import React from "react"
import styled from "styled-components"
import SocialContact from "./SocialContact"
import emailIcon from "../images/buzz-email-66.png"
import FacebookIcon from "./FacebookIcon"

const FlexContainer = styled.div`
  display: flex;
`

export default function Footer() {
  return (
    <>
      <SocialContact
        iconLink={emailIcon}
        link={"mailto:werethebuzz@gmail.com"}
        linkText={"werethebuzz@gmail.com"}
      />
      <FlexContainer></FlexContainer>
      <FacebookIcon />
    </>
  )
}
