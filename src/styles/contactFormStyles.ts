import styled, {css} from "styled-components";
import { NetlifyForm } from "../components/ContactForm";
import neonBorder from "../images/neon-border-kleiner.png"
import { hoverStyle } from "./playerStyles";

export const NetlifyFormStyled = styled(NetlifyForm)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.4) 100%
  );
`

export const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const neonBorderStyles = css`
  border: 12px solid transparent;
  border-radius: 10px;
  border-image: url(${neonBorder}) 20 stretch;
  border-image-outset: 4px;
  border-image-width: 12px;
`

interface inputProps {
  as?: string
  ref?: any
}
export const InputStyled = styled.input<inputProps>`
  ${neonBorderStyles}
  background-color: rgba(0, 0, 0, 0.8);
  color: rgba(255, 255, 255, 0.9);
  padding: 8px;
  font-weight: 500;
`

export const ButtonStyled = styled(InputStyled)`
  margin-top: 64px;
  font-size: max(3vw, 18px);
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  letter-spacing: 0.1rem;
  ${hoverStyle}
`