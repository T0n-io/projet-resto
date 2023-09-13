import { useContext, useState } from "react";
import HintMessage from "./HintMessage";
import OrderContext from "../../../../../../context/OrderContext";
import { styled } from "styled-components";
import SubmitMessage from "./SubmitMessage";
import TextInput from "../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";
import Button from "../../../../../reusable-ui/Button";
import {getInputTextsConfig} from "./inputTextConfig.jsx";
import {EMPTY_PRODUCT} from "../../../../../../enums/products.jsx"

export default function EditForm() {
  const {productSelected} = useContext(OrderContext);
  
  const [productBeingEditing, setProductBeingEditing] = useState(EMPTY_PRODUCT); // state interne à editForm
  const inputTexts = getInputTextsConfig(productSelected);
  const handleChange = (event) => { 
    const {name, value} = event.target
    setProductBeingEditing({
      ...productBeingEditing,
      [name]: value,
    })
   }

  
  return (
  <EditFormStyled>
      <ImagePreview
        imageSource={productSelected.imageSource}
        title={productSelected.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            key={input.id}
            {...input}
            onChange={handleChange}
            version="minimalist"
          />
        ))}
      </div>
      <div className="submit">
      </div>
    </EditFormStyled>
  )
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

    .submit-button {
      height: 100%;
    }
  }
`;