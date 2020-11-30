import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    font-family: Roboto;
    font-weight: 500;
    font-size: 3vw;
    color: rgba(256,256,256,0.8);

  }    
  h1, h2, h3 {
    color: rgba(26, 223, 218, 0.7);
    text-shadow: 0px 0px 0.3em rgba(26, 223, 218, 0.8);
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
    font-size: 24px;
    padding: 0 32px 12px 32px;
    }
    span {
      font-size: 18px;
    }
  }
`