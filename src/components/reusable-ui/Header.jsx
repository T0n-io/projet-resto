/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { theme } from "../../theme";

export default function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>;
}

const HeaderStyled = styled.div`
  /* border: 1px solid red; */
  height: 70px;
  background-color: ${theme.colors.background_dark};
  padding: 0 16px;
`;
