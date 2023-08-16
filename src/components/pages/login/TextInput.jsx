import { styled } from "styled-components";
import { theme } from "../../..";

export default function TextInput({
  value,
  onChange,
  Icon,
  ...restProps
}) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input value={value} onChange={onChange} type="text" {...restProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;
  .icon {
      font-size: 15px;
      margin-right: 8px;
      color: ${theme.colors.greyMedium};
    }
    
    input {
      border: none;
      font-size: 15px;
      color: ${theme.colors.dark};
      width: 100%;
      
    }
`
