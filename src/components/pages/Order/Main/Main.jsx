import styled from "styled-components";
import { theme } from "../../../..";
import MainRightSide from "./MainRightSide/MainRightSide";
import Basket from "./Basket/Basket.jsx";

export default function Main() {
  return (
    <MainStyled>
      <Basket />
      <MainRightSide />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  height: calc(95vh - 10vh);
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  display: grid;
  grid-template-columns: 25% 1fr;
  border-radius: ${theme.borderRadius.extraRound};
`;
