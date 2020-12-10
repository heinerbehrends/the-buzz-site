import styled from "styled-components"

export const MainHeading = styled.h1`
  margin: 0 auto;
  padding: 0.3em 0 0.1em 0;
  font-size: 9vw;
  font-weight: 800;
  text-align: center;
  letter-spacing: -0.07em;
  color: var(--primary-color);
  text-shadow: var(--primary-glow);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  @media screen and (min-width: 768px) {
    font-size: 69px;
  }
`
export const ConnectHeading = styled.h3`
  font-size: 9vw;
  font-weight: 500;
  text-align: center;
  letter-spacing: -0.07em;
  margin: 0;
  padding-top: 4rem;
  color: var(--primary-color);
  text-shadow: var(--primary-glow);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
  @media screen and (min-width: 768px) {
    font-size: 69px;
  }
`
export const SongTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  font-family: "Rock Salt";
  font-weight: 400;
  font-size: 4vw;
  padding: 2vw 0 1vw 3.5vw;
  text-align: left;
  color: var(--primary-color);
  text-shadow: 0px 0px 0.3em rgba(26, 223, 218, 1), 0px 0px 1em rgba(0, 0, 0, 1);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.66) 75%,
    rgba(0, 0, 0, 0.4) 100%
  );
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
