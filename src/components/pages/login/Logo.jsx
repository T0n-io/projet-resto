import styled from "styled-components";
import { theme } from "../../..";
export default function Logo() {
  return (
    <LogoStyled>
        <h3>CRAZEE</h3>
      <img src="../../../src/assets/images/F03-logo-orange.png" alt="Logo" />;
      <h3>BURGER</h3>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 200px;
    height: 150px;
    

}
  h3 {
    color: ${theme.colors.primary_burger};
    font-size: 110px;
    font-family: 'Amatic SC', cursive;;
  }
`;
