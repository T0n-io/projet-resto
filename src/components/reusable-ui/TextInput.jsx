import { css, styled } from "styled-components";
import { theme } from "../..";

// eslint-disable-next-line react/prop-types
export default function TextInput({
  value,
  onChange,
  Icon,
  className,
  version = "normal",
  ...restProps
}) {
  return (
    <TextInputStyled className={className} version={version}>
      <div className="icon">{Icon && Icon}</div>
      <input value={value} onChange={onChange} type="text" {...restProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  border-radius: ${theme.borderRadius.round}; 
  display: flex;
  align-items: center;
  .icon {
    font-size: ${theme.fonts.size.SM};
    margin: 0 13px 0 8px;
    display: flex;
  }
  
  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    width: 100%;
    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }
  /* ${(props) => {
   if (props.version === "normal") return extraStyleNormal 
   if (props.version === "minimalist") return extraStyleMinimalist
  }} */

  ${({version}) => extraStyle[version] }

  `

  
const extraStyleNormal = css`
  background-color: ${theme.colors.white};
  /* background: red; */
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};
  
    input{
      color: ${theme.colors.dark};

      &:placeholder{
        background: ${theme.colors.white};
      }
    }

`;

const extraStyleMinimalist = css`
background: ${theme.colors.background_white};
/* background: green; */
padding: 8px 16px;
color: ${theme.colors.greyBlue};

input{
  background: ${theme.colors.background_white};
  color: ${theme.colors.dark};
  &:focus{
    outline: 0;
  }
}
`
const extraStyle = {
  normal: extraStyleNormal,
  minimalist: extraStyleMinimalist
}
