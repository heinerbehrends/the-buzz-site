import styled, { css } from "styled-components"
import PlayButton from '../components/PlayButton'
import VolumeButton from '../components/VolumeButton'
import { hoverStyle } from "./playerStyles";

const sharedButtonStyles = css`
  fill: var(--white-color);
  width: max(2.2vw,16px);
  display: grid;
  align-items: center;
  justify-content: center;
  /* place-items: center; */
  border: none;
  background-color: transparent;
  margin: 0px;
  cursor: pointer;
  ${hoverStyle}
  :focus {
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
    filter: drop-shadow(0 0 2px white) drop-shadow(0 0 4px white);
    fill: white;
  }
`
export const PlayButtonStyled = styled(PlayButton)`
  /* height: max(6vw, 24px); */
  ${sharedButtonStyles}
  padding: 1vw;
  margin: 0 2vw;
`
export const VolumeButtonStyled = styled(VolumeButton)`
  ${sharedButtonStyles}
  padding: 8px 12px 8px 0px;
`