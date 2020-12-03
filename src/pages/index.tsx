import React from "react"
import { BackgroundStyled } from "../components/BackgroundImage"
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

export default function Home() {
  const scrollTop = useScroll()
  return (
    <Container>
      <GlobalStyle />
      <VideoWall position={scrollTop} />
      <MainContainer>
        <Header />
        <MainHeading>what's the Buzz all about?</MainHeading>
        <Info />
        <MultiplePlayers songs={songs} />
        <ConnectHeading>connect with the Buzz</ConnectHeading>
        <ContactForm />
      </MainContainer>
    </Container>
  )
}
