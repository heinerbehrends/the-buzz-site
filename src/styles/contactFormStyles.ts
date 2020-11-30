import styled from "styled-components";
import { NetlifyForm } from "../components/ContactForm";
import neonBorder from "../images/neon-border-kleiner.png"

export const inputStyles = {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  color: "rgba(255, 255, 255, 0.9)",
  padding: "8px",
  borderRadius: "10px",
  fontWeight: 500,
  boxShadow: "big",
  transition: "background-color 1.5s ease-in",
  border: "10px solid transparent",
  borderImage: `url(${neonBorder}) 20 stretch`,
  borderImageOutset: "4px",
  borderImageWidth: "12px",
}



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
interface inputProps {
  as?: string
  ref?: any
}

export const InputStyled = styled.input<inputProps>`
  background-color: rgba(0, 0, 0, 0.8);
  color: rgba(255, 255, 255, 0.9);
  padding: 8px;
  font-weight: 500;
  border: 12px solid transparent;
  border-radius: 10px;
  border-image: url(${neonBorder}) 20 stretch;
  border-image-outset: 4px;
  border-image-width: 12px;
`
