import styled, {css} from "styled-components";
import TimeDisplay from "../components/TimeDisplay";

export const Credits = styled.p`
  color: rgba(256, 256, 256, 0.8);
  text-align: right;
  text-align: right;
  font-size: max(2.083vw, 10px);
  line-height: 130%;
  padding: 0;
  padding-right: 1.2em;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding-right: 28px;
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
  color: rgba(256, 256, 256, 0.8);
  padding-left: 3.5vw;
  text-decoration: none;
  ${hoverStyle}
  ${mediumFontSize}
`

export const TimeDisplayStyled = styled(TimeDisplay)`
  margin-right: 2.083vw;
  @media screen and (min-width: 768px) {
    margin-right: 16px;
  }
  ${mediumFontSize}
 `;