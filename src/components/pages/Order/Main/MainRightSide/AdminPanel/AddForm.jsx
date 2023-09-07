import { useContext, useState } from "react";
import { styled } from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 14,
};

export default function AddForm() {
  // state
  const { handleAdd } = useContext(OrderContext);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  //comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: new Date().getTime(),
    };
    handleAdd(newProductToAdd);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const newValue = event.target.value;
    setNewProduct({ ...newProduct, [name]: newValue });
  };

  // const newProduct = {
  //   id: new Date().getTime(),
  //   title: "Nouveau produit",
  //   imageSource: "https://picsum.photos/300/300",
  //   price: 2.5,
  // };

  //affichage
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="img-preview">Image Preview</div>
      <div className="input-fields">
        <input
          name="title"
          value={newProduct.title}
          type="text"
          placeholder="Nom"
          onChange={handleChange}
        />
        <input
          name="imageSource"
          value={newProduct.imageSource}
          type="text"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          name="price" 
          value={newProduct.price ? newProduct.price : ""}
          type="text"
          placeholder="Price"
          onChange={handleChange}
        />
      </div>
      <button className="submit-button">Submit button</button>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  border: 2px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  .img-preview {
    background-color: red;
    grid-area: 1 / 1 / 4 / 2;
  }
  .input-fields {
    background-color: green;
    grid-area: 1 / 2 / -2 / 3;
    display: grid;
  }
  .submit-button {
    background-color: blue;
    grid-area: 4 / -2 / -1 / -1;
    width: 50%;
  }
`;
