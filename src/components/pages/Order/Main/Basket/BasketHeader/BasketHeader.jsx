/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { theme } from "../../../../../../theme";
import Header from "../../../../../reusable-ui/Header";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { formatPrice } from "../../../../../../utils/maths";
import { calculateSumToPay } from "../helper";
import CasinoEffect from "../../../../../reusable-ui/CasinoEffect";

export default function BasketHeader() {
  const { basket, menu } = useContext(OrderContext);

  const sumToPay = calculateSumToPay(basket, menu);

  return (
    <Header>
      <BasketHeaderStyled>
        <span className="total">Total</span>
        <CasinoEffect count={formatPrice(sumToPay)} />
        {/* <span className="amount">{formatPrice(sumToPay)}</span> */}
      </BasketHeaderStyled>
    </Header>
  );
}

const BasketHeaderStyled = styled.div`
  color: ${theme.colors.primary};
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;
`;
