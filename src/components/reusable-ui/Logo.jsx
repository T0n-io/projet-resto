import styled from "styled-components";
import { theme } from "../..";
export default function Logo() {
  return (
    <LogoStyled>
      {/* <h3>CRAZEE</h3>
      <img src="../../../src/assets/images/F03-logo-orange.png" alt="Logo" />;
      <h3>BURGER</h3> */}
      LOGO CRAZEE BURGER
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
background: blue;

  /*
  img {
    width: 200px;
    height: 150px;
  }
  h3 {
    color: ${theme.colors.primary_burger};
    font-size: 110px;
    font-family: "Amatic SC", cursive;
  } */
`;
