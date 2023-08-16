import styled from "styled-components";
import { theme } from "../..";
export default function Logo() {
  return (
    <LogoStyled>
      <h1>CRAZEE</h1>
      <img src="/images/F03-logo-orange.png" alt="Logo Crazee Burger" />;<h1>BURGER</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  transform: scale(2.5);

  img {
    width: 80px;
    height: 60px;
    object-fit: contain;
    object-position: center;
    margin: 0 5px;
  }
  h1 {
    color: ${theme.colors.primary_burger};
    display: inline;
    font-size: 36px;
    line-height: 1em;
    font-weight: 700;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }
`;
