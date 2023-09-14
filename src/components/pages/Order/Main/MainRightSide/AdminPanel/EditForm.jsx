import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { styled } from "styled-components";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage.jsx";

export default function EditForm() {
  //state
  const { productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(OrderContext);

  //comportements (gestionnaire d'évenements ou "event handlers")
  const handleChange = (event) => {
    const { name, value } = event.target;

    const produitEnCoursDeModification = {
      ...productSelected,
      [name]: value,
    };
    setProductSelected(produitEnCoursDeModification); // cette ligne update le formulaire
    // state handler du menu
    handleEdit(produitEnCoursDeModification); // cette ligne update la card
  };

  //affichage
  return (
    <Form product={productSelected} onChange={handleChange} ref={titleEditRef} QUELQUECHOSE={<EditInfoMessage />}/>
  );
}

const EditFormStyled = styled.form`
  /* border: 2px solid black; */
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    /* background: blue; */
    grid-area: 1 / 2 / -2 / 3;

    display: grid;
    grid-row-gap: 8px;
  }

  .submit {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;

   
  }
`;
