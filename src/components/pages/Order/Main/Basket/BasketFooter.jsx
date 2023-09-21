import { styled } from "styled-components";
import Header from "../../../../reusable-ui/Header";
import { theme } from "../../../../../theme";

export default function BasketFooter() {
  return (
    <Header>
      <BasketFooterStyled>
        <span>Codé avec le coeur & React.JS</span>
      </BasketFooterStyled>
    </Header>
  );
}

const BasketFooterStyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: ${theme.fonts.size.P2};
    font-family: "Amatic SC", cursive;
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.white};
  }
`;
