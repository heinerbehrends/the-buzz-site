import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: rgba(26, 223, 218, 0.8);
    --primary-glow: 0px 0px 0.3em rgba(26, 223, 218, 0.8);
    --white-color: rgba(256,256,256,0.8);
    --white-glow: 0px 0px 0.2em rgb(256, 256, 256);
  }
  html {
    background-color: black;
  }
  body {
    background-color: black;
    font-family: Roboto;
    font-weight: 500;
    font-size: max(3vw, 16px);
    color: rgba(256,256,256,0.8);
    text-shadow: 0.05em 0.05em 0.03em #000;
    height: 2100px;
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }    
  h1, h2, h3 {
    color: var(--primary-color);
    text-shadow: var(--primary-glow);
  }

  @media screen and (min-width: 768px) {
    h3 {
    font-size: 47px;
    }
    h2 {
    font-size: 30px;
      padding: 2px 0 3px 44px;
    }
    p, form {
    padding: 0 32px 12px 32px;
    }
  }
`