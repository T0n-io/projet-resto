/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { theme } from "../../../../..";
import Header from "../../../../reusable-ui/Header";

export default function Total({ amountToPay }) {
  return (
    <Header>
    <TotalStyled>
      <span className="toal">Total</span>
      <span className="amount">{amountToPay}</span>
    </TotalStyled>
    </Header>
  );
}

const TotalStyled = styled.div`
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
