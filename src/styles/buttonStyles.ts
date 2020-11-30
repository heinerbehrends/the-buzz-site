import styled, { css } from "styled-components"
import PlayButton from '../components/PlayButton'
import VolumeButton from '../components/VolumeButton'

const sharedButtonStyles = css`
  border: none;
  background-color: transparent;
  margin: 0px;
  fill: white;
  cursor: pointer;
`

export const PlayButtonStyled = styled(PlayButton)`
  ${sharedButtonStyles}
  padding: 4px;
  display: grid;
  place-items: center;
`
export const VolumeButtonStyled = styled(VolumeButton)`
  ${sharedButtonStyles}
  height: 48px;
  padding: 8px 12px 8px 0px;
`