import React from "react"
import styled from "styled-components"
import VideoWall from "../components/VideoWall"
import Header from "../components/Header"
import { MainHeading, ConnectHeading } from "../styles/headingStyles"
import Info from "../components/Info"
import MultiplePlayers from "../components/MultiplePlayers"
import ContactForm from "../components/ContactForm"
import { GlobalStyle } from "../styles/globalStyles"
import { MainContainer } from "../styles/pageStyles"
import Footer from "../components/Footer"
import useParallax from "../utils/useParallax"
import useBodySize from "../utils/useBodySize"

const FixedContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export default function Home() {
  useParallax()
  const { bodyWidth, bodyHeight } = useBodySize()
  return (
    <>
      <GlobalStyle bodyHeight={bodyHeight} />
      <FixedContainer>
        <VideoWall
          id={"background"}
          bodyHeight={bodyHeight}
          bodyWidth={bodyWidth}
        />
      </FixedContainer>
      <FixedContainer>
        <MainContainer id={"foreground"}>
          <Header />
          <MainHeading>what's the Buzz all about?</MainHeading>
          <Info />
          <MultiplePlayers />
          <ConnectHeading>connect with the Buzz</ConnectHeading>
          <ContactForm />
          <Footer />
        </MainContainer>
      </FixedContainer>
    </>
  )
}
