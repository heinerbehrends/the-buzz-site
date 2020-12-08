import React from "react"
import styled from "styled-components"
import VideoWall from "../components/VideoWall"
import Header from "../components/Header"
import { MainHeading, ConnectHeading } from "../styles/headingStyles"
import Info from "../components/Info"
import MultiplePlayers from "../components/MultiplePlayers"
import ContactForm from "../components/ContactForm"
import { GlobalStyle } from "../styles/globalStyles"
import { Container, MainContainer } from "../styles/pageStyles"
import { useScroll } from "../utils/useScroll"
import { songs } from "../songs"
import Footer from "../components/Footer"
import EmailIcon from "../components/EmailIcon"

const FixedContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export default function Home() {
  const scrollTop = useScroll()
  return (
    <>
      <GlobalStyle />
      <FixedContainer>
        <VideoWall position={scrollTop} />
      </FixedContainer>
      <FixedContainer>
        <MainContainer position={scrollTop}>
          <Header />
          <MainHeading>what's the Buzz all about?</MainHeading>
          <Info />
          <MultiplePlayers songs={songs} />
          <ConnectHeading>connect with the Buzz</ConnectHeading>
          <ContactForm />
          <Footer />
        </MainContainer>
      </FixedContainer>
    </>
  )
}
