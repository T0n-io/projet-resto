import styled from "styled-components";
import { theme } from "../../theme";
export default function Logo(props) {
  return (
    // eslint-disable-next-line react/prop-types
    <LogoStyled className={props.className}>
      <img src="../../../images/logo-velo.png" alt="Logo Crazee Burger" />
      <h1>Incredibike</h1>
      {/* <h1>Bike</h1> */}
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
    font-size: ${theme.fonts.size.P4};
    line-height: 1em;
    font-weight: ${theme.fonts.weights.bold};
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
