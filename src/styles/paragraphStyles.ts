import styled from "styled-components"

export const Paragraph = styled.p`
  margin: 0;
  padding: 0 1.2em 0.3em 1em;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 90%,
    rgba(0, 0, 0, 0.2) 100%
  );
  line-height: 150%;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    padding: 0 32px 12px 32px;
  }
`
