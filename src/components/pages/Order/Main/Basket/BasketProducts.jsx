/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import BasketCard from "./BasketCard";
import { IMAGE_COMMING_SOON } from "../../../../../enums/products";
import { findObjectById } from "../../../../../utils/array";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext.jsx";

export default function BasketProducts() {
  const { basket, handleDeleteBasketProduct, isModeAdmin, menu } = useContext(OrderContext);

  const handleOnDelete = (id) => {
    handleDeleteBasketProduct(id);
  };

  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => {
        const menuProduct = findObjectById(basketProduct.id, menu)
        // console.log("menuProduct: ", menuProduct);

        return (
          <div className="basket-card" key={basketProduct.id}>
            <BasketCard
              {...menuProduct}
              imageSource={
                menuProduct.imageSource
                  ? menuProduct.imageSource
                  : IMAGE_COMMING_SOON
              }
              quantity={basketProduct.quantity}
              onDelete={() => handleOnDelete(basketProduct.id)}
              isClickable={isModeAdmin}
            />
          </div>
        );
      })}
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .basket-card {
    margin: 10px 16px;
    /* height: 86%; */
    box-sizing: border-box;
    &:first-child {
      margin-top: 20px;
    }
    &:last-child {
      margin-bottom: 20px;
    }
  }
`;
