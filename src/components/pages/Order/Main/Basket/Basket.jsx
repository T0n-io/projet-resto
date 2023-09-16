import { styled } from "styled-components";
import { theme } from "../../../../..";
import Header from "../../../../reusable-ui/Header";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/formatPrice.jsx";
import Footer from "./Footer";
import BasketBody from "./EmptyBasket";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";


export default function Basket() {

  const basket = useContext(OrderContext)
  return (
    <BasketStyled>
        <Total amountToPay={formatPrice(0)} />
      <EmptyBasket basket={basket}/>
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;

  
`;
