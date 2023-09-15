import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { getInputTextsConfig } from "./inputTextConfig";
import { EMPTY_PRODUCT } from "../../../../../../enums/products";
import Form from "./Form";
import SubmitButton from "./SubmitButton";

export default function AddForm() {
  // state
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // comportements (gestionnaires d'évenements ou "event handlers")
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };

    handleAdd(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);

    displaySuccessMessage();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const displaySuccessMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
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
