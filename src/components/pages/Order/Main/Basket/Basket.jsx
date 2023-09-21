import { styled } from "styled-components";
import Total from "./Total";
import BasketFooter from "./BasketFooter";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import BasketBody from "./BasketBody/BasketBody";

export default function Basket() {
  const { basket, menu } = useContext(OrderContext);
  // console.log("basket", basket");

  if (menu === undefined) return <span className="loading">Chargement...</span>;

  return (
    <BasketStyled>
      <Total />
      {/* {isEmpty(basket) ? <EmptyBasket /> : <BasketProducts />} */}
      {/* <EmptyBasket basket={basket}/> */}
      {/* <BasketProducts /> */}
      <BasketBody />
      <BasketFooter />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  height: 85vh;

  .head {
    position: sticky;
    top: 0;
  }

  .footer {
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    position: sticky;
    bottom: 0;
  }
`;
