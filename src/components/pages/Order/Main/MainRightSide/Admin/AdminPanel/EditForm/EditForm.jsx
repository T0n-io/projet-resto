import { useContext, useState } from "react";
import OrderContext from "../../../../../../../../context/OrderContext";
import Form from "../Form/Form";
import EditInfoMessage from "./EditInfoMessage.jsx";
import SavingMessage from "../AddForm/SavingMessage.jsx";
import { useSuccessMessage } from "../../../../../../../../hooks/useDisplaySuccesMessage.jsx";

export default function EditForm() {
  //state
  const {
    username,
    productSelected,
    setProductSelected,
    handleEdit,
    titleEditRef,
  } = useContext(OrderContext);

  const [valueOnFocus, setValueOnFocus] = useState();
  const { isSubmitted: isSaved, displaySuccessMessage } = useSuccessMessage();
  //comportements (gestionnaire d'évenements ou "event handlers")
  const handleChange = (event) => {
    const { name, value } = event.target;

    const productBeingUpdated = {
      ...productSelected,
      [name]: value,
    };
    setProductSelected(productBeingUpdated); // cette ligne update le formulaire
    // state handler du menu
    handleEdit(productBeingUpdated, username); // cette ligne update la card
  };
  const handleOnFocus = () => {
    const inputValueOnFocus = event.target.value;
    setValueOnFocus(inputValueOnFocus);
    // console.log("inputValueOnFocus : ", inputValueOnFocus);
  };
  const handleOnBlur = () => {
    const valueOnBlur = event.target.value;
    if (valueOnBlur !== valueOnFocus) {
      // console.log("ca a changé");
      displaySuccessMessage();
    }
    // console.log("valueOnBlur : ", valueOnBlur);
  };
  //affichage
  return (
    <Form
      product={productSelected}
      onChange={handleChange}
      ref={titleEditRef}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    >
      {isSaved ? <SavingMessage /> : <EditInfoMessage />}
    </Form>
  );
}
