import styled, { css } from "styled-components"

export const BarStyles = css`
  grid-area: 1 / 1;
  height: 10px;
  border-radius: 2px;
`
export const BackgroundBar = styled.div`
  ${BarStyles}
  z-index: 1;
  background-color: gray;
`

export const ElapsedBar = styled.div`
  ${BarStyles}
  z-index: 2;
  background-color: gainsboro;
  box-shadow: var(--white-glow);
`
export const ClickableBar = styled.div`
  ${BarStyles}
  background-color: transparent;
  cursor: pointer;
  z-index: 3;
  height: 40px;
  grid-area: 1 /1;
  :hover ~ span {
    opacity: 1;
  }
`

export const ProgressBarContainer = styled.div`
  display: grid;
  flex: auto;
  width: 100%;
  align-items: center;
  border-radius: 4px;
`
export const Invisible = styled.div`
  opacity: 0;
`
