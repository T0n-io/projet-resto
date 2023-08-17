import styled from "styled-components";
import { theme } from "../..";
export default function Logo() {
  return (
    <LogoStyled>
      <h1>CRAZEE</h1>
      <img src="/images/F03-logo-orange.png" alt="Logo Crazee Burger" /><h1>BURGER</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  transform: scale(2.5);

  h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.P4};
    line-height: 1em;
    font-weight:  ${theme.weights.bold};
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }
  img {
    width: 80px;
    height: 60px;
    object-fit: contain;
    object-position: center;
    margin: 0 5px;
  }
  `;
