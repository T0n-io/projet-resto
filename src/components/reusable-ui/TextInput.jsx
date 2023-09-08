import { styled } from "styled-components";
import { theme } from "../..";

// eslint-disable-next-line react/prop-types
export default function TextInput({ value, onChange, Icon, className, ...restProps }) {
  return (
    <InputStyled className={className}>
    <div className="icon">
      {Icon && Icon}
    </div>
      <input value={value} onChange={onChange} type="text" {...restProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.P0};
    margin: 0 8px 0 10px;
    color: ${theme.colors.greySemiDark};
  }

  input {
    border: none;
    font-size: 15px;
    color: ${theme.colors.dark};
    width: 100%;
    &::placeholder{
      background: ${theme.colors.white};
      color: ${theme.colors.greyDark};
    }
  }
`;
