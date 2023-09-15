import { styled } from "styled-components";
import { theme } from "../../../../..";
import Header from "../../../../reusable-ui/Header";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/formatPrice.jsx";
import Footer from "./Footer";


export default function Basket() {
  return (
    <BasketStyled>
        <Total amountToPay={formatPrice(0)} />
      <div className="body">Body</div>
      <Footer />
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
