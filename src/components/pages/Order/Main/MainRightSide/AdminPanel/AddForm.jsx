import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { getInputTextsConfig } from "./inputConfig.jsx";
import { EMPTY_PRODUCT } from "../../../../../../enums/products";
import Form from "./Form";
import SubmitButton from "./SubmitButton";
import { useSuccessMessage } from "../../../../../../hooks/useDisplaySuccesMessage";
import { replaceFrenchCommaWithDot } from "../../../../../../utils/maths";

export default function AddForm() {
  // state
  const { username, handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
  const { isSubmitted, displaySuccessMessage } = useSuccessMessage(2000);
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // comportements (gestionnaires d'évenements ou "event handlers")
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
      price: replaceFrenchCommaWithDot(newProduct.price),
    };

    handleAdd(newProductToAdd, username);
    setNewProduct(EMPTY_PRODUCT);

    displaySuccessMessage();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const inputTexts = getInputTextsConfig(newProduct);
  // affichage
  return (
    <Form
      product={newProduct}
      inputs={inputTexts}
      onSubmit={handleSubmit}
      onChange={handleChange}
      isSubmitted={isSubmitted}
    >
      <SubmitButton isSubmitted={isSubmitted} />
    </Form>
  );
}
