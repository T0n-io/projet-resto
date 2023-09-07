import { useContext, useState } from "react";
import { styled } from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";

export default function AddForm() {
  // state
  const { handleAdd } = useContext(OrderContext);

  const [title, setTitle] = useState("");
  const [imageSource, setImageSource] = useState("");
  const [price, setPrice] = useState(0);

//comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    handleAdd(newProduct);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  };
  const handleImageSourceChange = (event) => {
    setImageSource(event.target.value)
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value)
  };

  // const newProduct = {
  //   id: new Date().getTime(),
  //   title: "Nouveau produit",
  //   imageSource: "https://picsum.photos/300/300",
  //   price: 2.5,
  // };
  const newProduct = {
    id: new Date().getTime(),
    title: title,
    imageSource: imageSource,
    price: price,
  };
//affichage
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="img-preview">Image Preview</div>
      <div className="input-fields">
        <input value={title} type="text" placeholder="Nom" onChange={handleTitleChange} />
        <input value={imageSource} type="text" placeholder="Image URL" onChange={handleImageSourceChange} />
        <input value={price ? price : ""} type="text" placeholder="Price" onChange={handlePriceChange}/>
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
