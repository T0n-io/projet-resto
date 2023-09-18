import { styled } from "styled-components";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/formatPrice.jsx";
import Footer from "./Footer";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import EmptyBasket from "./EmptyBasket";
import BasketProducts from "./BasketProducts";
import { theme } from "../../../../..";


export default function Basket() {

  const {basket, isModeAdmin, handleDeleteBasketProduct} = useContext(OrderContext)
  // console.log("basket", basket");

  const isBasketEmpty = basket.length === 0

  const totalToPay = basket.reduce((total, basketProduct) => {
    total += basketProduct.price * basketProduct.quantity;
    return total;
  }, 0);

  return (
    <BasketStyled>
        <Total amountToPay={formatPrice(totalToPay)} />
        {isBasketEmpty ? <EmptyBasket /> : <BasketProducts basket={basket} handleDeleteBasketProduct={handleDeleteBasketProduct} isModeAdmin={isModeAdmin} />}
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
