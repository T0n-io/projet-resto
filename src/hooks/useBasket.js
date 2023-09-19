import { useState } from "react";
import { fakeBasket } from "../../data/fakeBasket";
import {
  deepClone,
  removeObjectById,
  findObjectById,
  findIndexById,
} from "../utils/array";
import { setLocalStorage } from "../utils/window";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (idProductToAdd, username) => {
    const basketCopy = deepClone(basket);
    const productAlreadyInBasket =
      findObjectById(idProductToAdd, basketCopy)

    if (productAlreadyInBasket) {
      incrementProductAlreadyInBasket(idProductToAdd, basketCopy, username);
      return;
    }
    createNewBasketProduct(idProductToAdd, basketCopy, setBasket);
  };

  const incrementProductAlreadyInBasket = (idProductToAdd, basketCopy, username) => {
    const indexOfBasketProductToIncrement = findIndexById(
      idProductToAdd,
      basketCopy
    );
    basketCopy[indexOfBasketProductToIncrement].quantity += 1;
    // 3. update du state
    setBasket(basketCopy);
    setLocalStorage(username, basketCopy);
  };

  const createNewBasketProduct = (idProductToAdd, basketCopy, setBasket, username) => {
    // we do not re-create a whole product, we only add extra info to the basket's product
    const newBasketProduct = { id: idProductToAdd, quantity: 1 };
    const newBasket = [newBasketProduct, ...basketCopy];
    setBasket(newBasket);
    setLocalStorage(username, newBasket);

  };

  const handleDeleteBasketProduct = (idBasketProduct) => {
    const basketUpdated = removeObjectById(idBasketProduct, basket);

    // 3. update du state
    setBasket(basketUpdated);
  };

  return { basket, handleAddToBasket, handleDeleteBasketProduct };
};
