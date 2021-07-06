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
    filter: drop-shadow(0 0 2px white) drop-shadow(0 0 4px white);
  }
`

const mediumFontSize = css`
  font-size: max(2.34vw, 14px);
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

const focusStyle = css`
  :focus {
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
    text-shadow: none;
    filter: drop-shadow(0 0 2px white) drop-shadow(0 0 4px white);
    fill: white;
  }
`

export const PlayerLink = styled.a`
  margin-top: 0.25rem;
  display: inline-block;
  color: rgba(256, 256, 256, 0.8);
  text-decoration: none;
  ${hoverStyle}
  ${focusStyle}
  ${mediumFontSize}
  @media screen and (min-width: 480px) {
    margin-top: 0;
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
  justify-content: center;
  @media screen and (min-width: 480px) {
    flex-direction: row;
  }
`
export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  cursor: pointer;
  ${hoverStyle}
  ${focusStyle}
`

export const HeartContainer = styled.button`
  display: flex;
  align-items: center;
  padding-right: 16px;
  cursor: pointer;
  background: transparent;
  border: none;
  ${hoverStyle}
  ${focusStyle}
`
