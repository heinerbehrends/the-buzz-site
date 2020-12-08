import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  max-width: 768px;
  margin: 0 auto;
`
interface mainContainerProps {
  position: number
}

export const MainContainer = styled.div<mainContainerProps>`
  grid-area: 1 / 1;
  max-width: 768px;
  margin: 0 auto;
  will-change: transform;
  transform: translate3d(0,${props => props.position * -1}px, 0);
`
