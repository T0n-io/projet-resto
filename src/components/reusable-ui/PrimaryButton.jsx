import { styled } from "styled-components";
import { theme } from "../..";

export default function PrimaryButton({ label, Icon }) {
  return (
    <PrimaryButtonStyled>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
 
  width: 100%;
  font-size: 15px;
  font-weight: ${theme.fonts.weights.heavy};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;
  border: none;
  padding: 18px 24px;
  border-radius: 5px;
  background-color: ${theme.colors.primary_burger};
  color: ${theme.colors.white};

  &:hover:not(disabled) {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary_burger};
    border: solid 1.5px ${theme.colors.primary_burger};
    transition: all 0.2s ease-out;
  }
  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary_burger};
    border: solid 1.5px ${theme.colors.primary_burger};
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  /* button {
    background-color: ${theme.colors.primary_burger};
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
    width: 100%;
    height: 100%;
  } */
`;
