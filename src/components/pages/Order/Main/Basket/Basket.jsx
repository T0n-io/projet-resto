import { styled } from "styled-components";
import { theme } from "../../../../..";
import Header from "../../../../reusable-ui/Header";

export default function Basket() {
  return (
    <BasketStyled>
      <Header>Head</Header>
      <div className="body">Body</div>
      <Header>Footer</Header>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;

  .body {
    flex: 1;
    background-color: ${theme.colors.background_white};
    height: 100%;
    box-shadow: ${theme.shadows.basket};
  }

`;
