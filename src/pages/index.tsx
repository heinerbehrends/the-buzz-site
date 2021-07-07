import React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import { MainHeading, ConnectHeading } from "../styles/headingStyles"
import Bio from "../components/Bio"
import MultiplePlayers from "../components/MultiplePlayers"
import ContactForm from "../components/ContactForm"
import { GlobalStyle } from "../styles/globalStyles"
import { MainContainer } from "../styles/pageStyles"
import Footer from "../components/Footer"
import useParallax from "../utils/useParallax"
import useBodySize from "../utils/useBodySize"
import Seo from "../components/Seo"
import VideoWallSimpler from "../components/VideoWallSimpler"

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
      <Seo />
      <GlobalStyle bodyHeight={bodyHeight} />
      <FixedContainer>
        <VideoWallSimpler
          id={"background"}
          bodyHeight={bodyHeight}
          bodyWidth={bodyWidth}
        />
      </FixedContainer>
      <FixedContainer>
        <MainContainer id={"foreground"}>
          <Header />
          <MainHeading>what's the Buzz all about?</MainHeading>
          <Bio />
          <MultiplePlayers />
          <ConnectHeading>connect with the Buzz</ConnectHeading>
          <ContactForm />
          <Footer />
        </MainContainer>
      </FixedContainer>
    </>
  )
}
