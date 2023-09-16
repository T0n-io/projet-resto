import { useState } from "react";
import { fakeBasket } from "../../data/fakeBasket";

const useBasket = () => { 

    const [basket, setBasket] = useState(fakeBasket.EMPTY);
    return {basket}
}