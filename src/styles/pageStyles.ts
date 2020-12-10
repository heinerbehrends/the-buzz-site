import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  max-width: 768px;
  margin: 0 auto;
`
interface mainContainerProps {
  id: string
}

export const MainContainer = styled.div<mainContainerProps>`
  grid-area: 1 / 1;
  max-width: 768px;
  margin: 0 auto;
  will-change: transform;
`
