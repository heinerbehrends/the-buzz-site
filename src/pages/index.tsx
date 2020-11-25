import React, { useEffect, useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import "normalize.css"
import { BackgroundStyled } from "../BackgroundImage"
import Header from "../Header"
import Heading from "../Heading"
import Info from "../Info"
import MultiplePlayers from "../MultiplePlayers"
import fedUp from "../mp3/Fed_up.mp3"
import lifeguard from "../mp3/Lifeguard.mp3"
import { song } from "../MultiplePlayers"

const songs: song[] = [
  {
    title: "Fed up (with machine guns)",
    mp3: fedUp,
    credits: "Heiner Behrends en Leon van de Vendel",
  },
  {
    title: "Lifeguard",
    mp3: lifeguard,
    credits: "Heiner Behrends en Leon van de Vendel",
  },
]

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    font-family: Roboto;
    font-size: 3vw;
    color: rgba(256,256,256,0.8);

  }    
  h1, h2, h3 {
    color: rgba(26, 223, 218, 0.8);
    text-shadow: 0px 0px 0.3em rgba(26, 223, 218, 0.8);
  }
  p {
    padding: 0;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    /* #background {
      background-attachment: fixed;
    } */
    section {
      /* position: fixed; */
      background-size: 768px !important;

    }
    h3 {
    font-size: 47px;
    }

    h2 {
    font-size: 30px;
      padding: 2px 0 3px 44px;
    }

    p {
    font-size: 24px;
    padding: 0 32px 12px 32px;
    }
  }
`

const Container = styled.div`
  display: grid;
  max-width: 768px;
  margin: 0 auto;
`

const MainContainer = styled.div`
  grid-area: 1 / 1;
`

export default function Home() {
  const [scrollTop, setScrollTop] = useState(0)
  function handleScroll() {
    setScrollTop(window.pageYOffset || document.documentElement.scrollTop)
  }
  useEffect(() => {
    const isBrowser = typeof window !== `undefined`

    if (isBrowser) {
      window.addEventListener("scroll", handleScroll)
    }
  })

  return (
    <Container>
      <GlobalStyle />
      <BackgroundStyled position={scrollTop} />
      <MainContainer>
        <Header />
        <Heading />
        <Info />
        <MultiplePlayers songs={songs} />
      </MainContainer>
    </Container>
  )
}
