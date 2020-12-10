import styled from "styled-components"
import { BarStyles } from "./progressBarStyles"

export const VolumeBarContainer = styled.div`
  display: grid;
  width: 120px;
  align-items: center;
  overflow: hidden;
  margin-right: 28px;
`
interface volumeBarProps {
  volume: number
}
export const VolumeBar = styled.div<volumeBarProps>`
  ${BarStyles}
  z-index: 2;
  width: ${props => props.volume * 100}%;
  background-color: gainsboro;
  box-shadow: var(--white-glow);
`
export const VolumeBarBackground = styled.div`
  ${BarStyles}
  z-index: 1;
  background-color: gray;
`
export const VolumeBarControls = styled.div`
  z-index: 3;
  grid-area: 1 /1;
  cursor: pointer;
  height: 40px;
  width: 100%;
  background-color: transparent;
`
