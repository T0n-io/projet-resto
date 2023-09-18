import { useState } from "react";
import { fakeBasket } from "../../data/fakeBasket";
import {
  deepClone,
  removeObjectById,
  findObjectById,
  findIndexById,
} from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (idProductToAdd) => {
    const basketCopy = deepClone(basket);
    const productAlreadyInBasket =
      findObjectById(idProductToAdd, basketCopy) !== undefined;

    if (productAlreadyInBasket) {
      incrementProductAlreadyInBasket(idProductToAdd, basketCopy);
      return;
    }
    createNewBasketProduct(idProductToAdd, basketCopy, setBasket);
  };

  const incrementProductAlreadyInBasket = (idProductToAdd, basketCopy) => {
    const indexOfBasketProductToIncrement = findIndexById(
      idProductToAdd.id,
      basketCopy
    );
    basketCopy[indexOfBasketProductToIncrement].quantity += 1;
    // 3. update du state
    setBasket(basketCopy);
  };

  const createNewBasketProduct = (idProductToAdd, basketCopy, setBasket) => {
    // we do not re-create a whole product, we only add extra info to the basket's product
    const newBasketProduct = { id: idProductToAdd, quantity: 1 };
    const newBasket = [newBasketProduct, ...basketCopy];
    setBasket(newBasket);
  };

  const handleDeleteBasketProduct = (idBasketProduct) => {
    // 1. Copie du state
    const basketCopy = deepClone(basket);

    // 2. manip de la copie du state
    // const basketUpdated = basketCopy.removeObjectById(product) => product.id !== idBasketProduct);
    const basketUpdated = removeObjectById(idBasketProduct, basketCopy);

    // 3. update du state
    setBasket(basketUpdated);
  };

  return { basket, handleAddToBasket, handleDeleteBasketProduct };
};
