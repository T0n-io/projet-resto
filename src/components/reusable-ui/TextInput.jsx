/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { css, styled } from "styled-components";
import { theme } from "../../theme";
import React from "react";

// eslint-disable-next-line react/prop-types
const TextInput = React.forwardRef(
  (
    { value, onChange, Icon, className, version = "normal", ...restProps },
    ref
  ) => {
    return (
      <TextInputStyled className={className} version={version}>
        <div className="icon">{Icon && Icon}</div>
        <input
          ref={ref}
          value={value}
          onChange={onChange}
          type="text"
          {...restProps}
        />
      </TextInputStyled>
    );
  }
);
export default TextInput;
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

  ${({ version }) => extraStyle[version]}
`;

const extraStyleNormal = css`
  background-color: ${theme.colors.white};
  /* background: red; */
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};

    &:placeholder {
      background: ${theme.colors.white};
    }
  }
`;

const extraStyleMinimalist = css`
  background: ${theme.colors.background_white};
  /* background: green; */
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.background_white};
    color: ${theme.colors.dark};
    &:focus {
      outline: 0;
    }
  }
`;
const extraStyle = {
  normal: extraStyleNormal,
  minimalist: extraStyleMinimalist,
};
