import styled from "styled-components"

export const PlayerContainer = styled.div`
  padding-left: 1rem;
  display: flex;
  gap: 16px;
  @media screen and (min-width: 480px) {
    gap: 16px;
  }
  place-items: center;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.5) 48%,
    rgba(0, 0, 0, 0.3) 100%
  );
`

export const CreditsContainer = styled.div`
  padding-left: 2rem;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.66) 33%,
    rgba(0, 0, 0, 0.2) 100%
  );
`
