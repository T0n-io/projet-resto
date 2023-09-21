/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import BasketCard from "./BasketCard";
import { IMAGE_COMMING_SOON } from "../../../../../../enums/products";
import { findObjectById } from "../../../../../../utils/array";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { basketAnimation } from "../../../../../../theme/animations";

export default function BasketProducts() {
  const {
    username,
    basket,
    handleDeleteBasketProduct,
    isModeAdmin,
    menu,
    handleProductSelected,
  } = useContext(OrderContext);

  const handleOnDelete = (event, id) => {
    event.stopPropagation();
    handleDeleteBasketProduct(id, username);
  };

  return (
    <BasketProductsStyled>
      <TransitionGroup>
        {basket.map((basketProduct) => {
          const menuProduct = findObjectById(basketProduct.id, menu);
          // console.log("menuProduct: ", menuProduct);
          return (
            <CSSTransition
              appear={true}
              classNames={"basket-card-transition"}
              key={basketProduct.id}
              timeout={500}
            >
              <div className="basket-card">
                <BasketCard
                  {...menuProduct}
                  imageSource={
                    menuProduct.imageSource
                      ? menuProduct.imageSource
                      : IMAGE_COMMING_SOON
                  }
                  quantity={basketProduct.quantity}
                  onDelete={(event) => handleOnDelete(event, basketProduct.id)}
                  isClickable={isModeAdmin}
                  onClick={
                    isModeAdmin
                      ? () => handleProductSelected(basketProduct.id)
                      : null
                  }
                  className={"transition"}
                />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
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
  ${basketAnimation}
`;
