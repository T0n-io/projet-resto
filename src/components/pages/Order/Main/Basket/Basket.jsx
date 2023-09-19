import { styled } from "styled-components";
import Total from "./Total";
import Footer from "./Footer";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import EmptyBasket from "./EmptyBasket";
import BasketProducts from "./BasketProducts";
import { theme } from "../../../../..";
import { isEmpty } from "../../../../../utils/array";


export default function Basket() {

  const {basket} = useContext(OrderContext)
  // console.log("basket", basket");



  return (
    <BasketStyled>
        <Total />
        {isEmpty(basket) ? <EmptyBasket /> : <BasketProducts />}
      {/* <EmptyBasket basket={basket}/> */}
      {/* <BasketProducts /> */}
      <Footer />
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

    .head{
      position: sticky;
      top: 0; 
       }

       .footer{
        border-bottom-left-radius: ${theme.borderRadius.extraRound};
        position: sticky;
        bottom: 0;
       }

  
`;


