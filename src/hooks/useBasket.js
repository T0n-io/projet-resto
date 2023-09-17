import { useState } from "react";
import { fakeBasket } from "../../data/fakeBasket";
import { deepClone, find } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.SMALL);

  const handleAddToBasket = (productToAdd) => {
    // 1. Copie du state
    const basketCopy = deepClone(basket);
    const isProductAlreadyInBasket =
      find(productToAdd.id, basketCopy) !== undefined;

    // 2. manip de la copie du state
    // 1er cas: le produit n'est pas dans le panier
    if (!isProductAlreadyInBasket) {
      const newBasketProduct = { ...productToAdd, quantity: 1 };


      const basketUpdated = [newBasketProduct, ...basketCopy];

      // 3. update du state
      setBasket(basketUpdated);
    }

    // 2eme cas: le produit est déjà dans le panier

  };
  return { basket, handleAddToBasket };
};
