import styled, { css } from "styled-components"
import TimeDisplay from "../components/TimeDisplay"

export const Credits = styled.p`
  color: rgba(256, 256, 256, 0.8);
  text-align: right;
  text-align: right;
  font-size: max(2.083vw, 12px);
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
  margin-top: 0.25rem;
  color: rgba(256, 256, 256, 0.8);
  text-decoration: none;
  ${hoverStyle}
  ${mediumFontSize}
  @media screen and (min-width: 480px) {
    margin-top: 0;
    margin-left: 1rem;
  }
`

export const TimeDisplayStyled = styled(TimeDisplay)`
  ${mediumFontSize}
  display: none;
  @media screen and (min-width: 480px) {
    display: inline;
  }
`

export const MetaLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 480px) {
    flex-direction: row;
  }
`

export const HeartContainer = styled.div`
  display: flex;
  align-items: center;
`
