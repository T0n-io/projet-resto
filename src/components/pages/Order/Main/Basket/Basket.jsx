import { styled } from "styled-components";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/formatPrice.jsx";
import Footer from "./Footer";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import EmptyBasket from "./EmptyBasket";
import BasketProducts from "./BasketProducts";


export default function Basket() {

  const {basket} = useContext(OrderContext)
  // console.log("basket", basket");

  const isBasketEmpty = basket.length === 0
  return (
    <BasketStyled>
        <Total amountToPay={formatPrice(0)} />
        {isBasketEmpty ? <EmptyBasket /> : <BasketProducts />}
      {/* <EmptyBasket basket={basket}/> */}
      {/* <BasketProducts /> */}
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;

  
`;
