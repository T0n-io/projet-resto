import { styled } from "styled-components";
import { theme } from "../../../../..";

export default function Body() {
  return (
    <BasketBodyStyled>
      <span className="empty-message">Votre commande est vide.</span>
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  flex: 1;
  background-color: ${theme.colors.background_white};
  /* height: 100%; */
  box-shadow: ${theme.shadows.basket};
  height: 100%;
  .empty-message {
    display: flex;
    height: calc(95vh - 10vh - 70px - 70px);
    text-align: center;
    flex: 1;
    justify-content: center;
    align-self: center;
    align-items: center;
    line-height: 2;
    font-size: ${theme.fonts.size.P4};
    font-family: ${theme.fonts.family.stylish};
    color: ${theme.colors.greyBlue};
  }
`;
