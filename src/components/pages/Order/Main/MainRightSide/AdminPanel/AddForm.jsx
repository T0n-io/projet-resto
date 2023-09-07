import { useContext } from "react";
import { styled } from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";

export default function AddForm() {
  const {handleAdd} = useContext(OrderContext)

  const newProduct = {
    id: new Date().getTime(),
    title: "Nouveau produit",
    imageSource: "https://picsum.photos/300/300",
    price: 2.5,
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    handleAdd(newProduct)
  }
  

  return <AddFormStyled onSubmit={handleSubmit}> 
    <div className="img-preview">Image Preview</div>
    <div className="input-fields">
      <input type="text" placeholder="Nom" />
      <input type="text" placeholder="Image URL" />
      <input type="text" placeholder="Price" />
    </div>
    <button className="submit-button">
      Submit button
    </button>
  </AddFormStyled>;
}


const AddFormStyled = styled.form`
border: 2px solid black;
display: grid;
grid-template-columns: 1fr 3fr;
grid-template-rows: repeat(4, 1fr);
height: 100%;
width: 70%;
  .img-preview{
    background-color: red;
    grid-area: 1 / 1 / 4 / 2;
  }
  .input-fields{
    background-color: green;
    grid-area: 1 / 2 / -2 / 3;
    display: grid;
  }
  .submit-button{
    background-color: blue;
    grid-area: 4 / -2 / -1 / -1;
    width: 50%;
  }
`;