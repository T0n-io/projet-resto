import { useState } from "react";
import {
  deepClone,
  removeObjectById,
  findObjectById,
  findIndexById,
} from "../utils/array";
import { setLocalStorage } from "../utils/window";

export const useBasket = () => {
  const [basket, setBasket] = useState([]);

  const handleAddToBasket = (idProductToAdd, username) => {
    const basketCopy = deepClone(basket);
    const productAlreadyInBasket =
      findObjectById(idProductToAdd, basketCopy)

    if (productAlreadyInBasket) {
      incrementProductAlreadyInBasket(idProductToAdd, basketCopy, username);
      return;
    }
    createNewBasketProduct(idProductToAdd, basketCopy, setBasket, username);
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

  const handleDeleteBasketProduct = (idBasketProduct, username) => {
    const basketUpdated = removeObjectById(idBasketProduct, basket);

    // 3. update du state
    setBasket(basketUpdated);
    setLocalStorage(username, basketUpdated);

  };

  return { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct };
};
