/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import BasketCard from "./BasketCard";
import { IMAGE_COMMING_SOON } from "../../../../../enums/products";

export default function BasketProducts({ basket, handleDeleteBasketProduct, isModeAdmin }) {

  const handleOnDelete = (id) => {
    handleDeleteBasketProduct(id);
  };
  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => (
          <div className="basket-card" key={basketProduct.id}>
            <BasketCard 
              {...basketProduct}
              imageSource={
                basketProduct.imageSource
                  ? basketProduct.imageSource
                  : IMAGE_COMMING_SOON
              }
              onDelete={() => handleOnDelete(basketProduct.id)}
              isModeAdmin={isModeAdmin}
            />
          </div>
        ))}
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
