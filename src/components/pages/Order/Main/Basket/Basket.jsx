import { styled } from "styled-components";
import { theme } from "../../../../..";
import Header from "../../../../reusable-ui/Header";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/formatPrice.jsx";
import Footer from "./Footer";
import BasketBody from "./BasketBody";


export default function Basket() {
  return (
    <BasketStyled>
        <Total amountToPay={formatPrice(0)} />
      <BasketBody />
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;

  
`;
