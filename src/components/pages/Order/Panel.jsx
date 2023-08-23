import { styled } from "styled-components";

export default function Panel() {
  return (
    <PanelStyled>Panel</PanelStyled>
  )
}

const PanelStyled = styled.div`

    background: red;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
border-radius: 0px 0px 15px 15px;
position: relative;
bottom: 0;
left: 0;
  
`;

