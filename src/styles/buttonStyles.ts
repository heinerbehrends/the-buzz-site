import styled, { css } from "styled-components"
import PlayButton from "../components/PlayButton"
import VolumeButton from "../components/VolumeButton"
import { focusStyle, hoverStyle } from "./playerStyles"

const sharedButtonStyles = css`
  fill: var(--white-color);
  width: max(2vw, 20px);
  display: grid;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  margin: 0px;
  cursor: pointer;
  ${hoverStyle}
  ${focusStyle}
`
export const PlayButtonStyled = styled(PlayButton)`
  ${sharedButtonStyles}
`
export const VolumeButtonStyled = styled(VolumeButton)`
  ${sharedButtonStyles}
`
