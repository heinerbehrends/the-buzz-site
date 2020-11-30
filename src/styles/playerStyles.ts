import styled from "styled-components";

export const Credits = styled.p`
  color: rgba(256, 256, 256, 0.8);
  text-align: right;
  text-align: right;
  font-size: 2.5vw;
  line-height: 130%;
  padding: 0;
  padding-right: 1.2em;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding-right: 28px;
  }
`

export const DownloadLink = styled.a`
  color: rgba(256, 256, 256, 0.8);
  padding-left: 3.5vw;
  text-decoration: none;
  text-shadow: 0.05em 0.05em 0.03em #000;
  :hover {
    text-shadow: 0px 0px 0.2em rgb(256, 256, 256);
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`