import { useState } from "react";
import { fakeBasket } from "../../data/fakeBasket";

export const useBasket = () => { 

    const [basket, setBasket] = useState(fakeBasket.EMPTY);

    const handleAddToBasket = (productToAdd) => {
        // return
    }
    return {basket, handleAddToBasket}
}