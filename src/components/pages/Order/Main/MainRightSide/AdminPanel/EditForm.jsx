import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage.jsx";

export default function EditForm() {
  //state
  const { username, productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(OrderContext);

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

  //affichage
  return (
    <Form product={productSelected} onChange={handleChange} ref={titleEditRef}>
      <EditInfoMessage />
    </Form>
  );
}
