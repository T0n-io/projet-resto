import { isEmpty } from "../../../../../../utils/array";
import EmptyBasket from "./EmptyBasket";
import BasketProducts from "./BasketProducts";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";

// eslint-disable-next-line react/prop-types
export default function BasketBody() {
  const { basket } = useContext(OrderContext);

  return <> {isEmpty(basket) ? <EmptyBasket /> : <BasketProducts />}</>;
}
