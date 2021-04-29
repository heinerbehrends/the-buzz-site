import styled, { css } from "styled-components"
import TimeDisplay from "../components/TimeDisplay"

export const Credits = styled.p`
  color: rgba(256, 256, 256, 0.8);
  text-align: right;
  text-align: right;
  font-size: max(2.083vw, 10px);
  line-height: 130%;
  padding: 0;
  padding-right: 2rem;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const hoverStyle = css`
  :hover {
    text-shadow: var(--white-glow);
  }
`

const mediumFontSize = css`
  font-size: max(2.34vw, 14px);
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const DownloadLink = styled.a`
  padding-left: 0.5rem;
  color: rgba(256, 256, 256, 0.8);
  text-decoration: none;
  ${hoverStyle}
  ${mediumFontSize}
`

export const TimeDisplayStyled = styled(TimeDisplay)`
  ${mediumFontSize}
  display: none;
  @media screen and (min-width: 480px) {
    display: inline;
  }
`
