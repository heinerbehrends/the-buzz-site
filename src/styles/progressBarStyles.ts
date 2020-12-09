import styled, {css} from "styled-components"


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

interface bufferedBarProps {
  buffered: number
}
export const BufferedBar = styled.div<bufferedBarProps>`
${BarStyles}
  z-index: 1;
  width: ${props => props.buffered}%;
  background-color: darkgray;
`

interface elapsedBarProps {
  elapsed: number
}
export const ElapsedBar = styled.div<elapsedBarProps>`
${BarStyles}
  z-index: 2;
  width: ${props => props.elapsed}%;
  background-color: gainsboro;
`
export const ClickableBar = styled.div`
${BarStyles}
  background-color: transparent;
  cursor: pointer;
  z-index: 3;
  height: 40px;
  grid-area: 1 /1;
  :hover ~ span {
    opacity: 1
  }
`

interface timeHandleProps {
  elapsed: number
  offset: number
}
export const TimeHandle = styled.span<timeHandleProps>`
  position: relative;
  opacity: 0;
  transition: opacity 0.25s;
  grid-area: 1 /1;
  z-index: 4;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: #fff;
  transform: translateX(${props => props.offset - 8}px);
  left: ${props => props.elapsed}%;
  cursor: grab;
  :hover {
    opacity: 1;
  }
`

export const ProgressBarContainer = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  border-radius: 4px;
  margin-right: 20px;
`
export const Invisible = styled.div`
  opacity: 0;
`
