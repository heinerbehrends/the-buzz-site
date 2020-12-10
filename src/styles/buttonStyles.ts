import styled, { css } from "styled-components"
import PlayButton from '../components/PlayButton'
import VolumeButton from '../components/VolumeButton'
import { hoverStyle } from "./playerStyles";

const sharedButtonStyles = css`
  fill: var(--white-color);
  display: grid;
  place-items: center;
  border: none;
  background-color: transparent;
  margin: 0px;
  cursor: pointer;
  ${hoverStyle}
  :focus {
    border: none;
    box-shadow: 2px 2px 2px 1px rgba(255, 0, 0, 0.2)
  }
`

export const PlayButtonStyled = styled(PlayButton)`
  ${sharedButtonStyles}
  padding: 4px;
`
export const VolumeButtonStyled = styled(VolumeButton)`
  ${sharedButtonStyles}
  height: 48px;
  padding: 8px 12px 8px 0px;
`