import { useState } from "react";
import { fakeBasket } from "../../data/fakeBasket";
import { deepClone, removeObjectById, findObjectById, findIndexById } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (productToAdd) => {
    // 1. Copie du state
    const basketCopy = deepClone(basket);
    const isProductAlreadyInBasket =
      findObjectById(productToAdd.id, basketCopy) !== undefined;

    // 2. manip de la copie du state
    // 1er cas: le produit n'est pas dans le panier
    if (!isProductAlreadyInBasket) {
      createNewProductInBasket(productToAdd, basketCopy, setBasket);
      return;
    }
    // 2eme cas: le produit est déjà dans le panier
    incrementProductAlreadyInBasket(productToAdd, basketCopy);
  }

      const incrementProductAlreadyInBasket = (productToAdd, basketCopy) => {
          const indexOfBasketProductToIncrement = findIndexById(
              productToAdd.id,
              basketCopy
          );
          basketCopy[indexOfBasketProductToIncrement].quantity += 1;
          // 3. update du state
          setBasket(basketCopy);
  };

  const createNewProductInBasket = (productToAdd, basketCopy, setBasket) => {
      const newBasketProduct = { ...productToAdd, quantity: 1 };
  
      const basketUpdated = [newBasketProduct, ...basketCopy];
  
      // 3. update du state
      setBasket(basketUpdated);
  }

  const handleDeleteBasketProduct = (idBasketProduct) => {
    // 1. Copie du state
    const basketCopy = deepClone(basket);

    // 2. manip de la copie du state
    // const basketUpdated = basketCopy.removeObjectById(product) => product.id !== idBasketProduct);
    const basketUpdated = removeObjectById(idBasketProduct, basketCopy);

    // 3. update du state
    setBasket(basketUpdated);
  }

  return { basket, handleAddToBasket, handleDeleteBasketProduct };
};

