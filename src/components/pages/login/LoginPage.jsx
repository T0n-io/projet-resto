// import React, { useState } from "react";
import { styled } from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {
  // affichage
  return (
    <LoginPageStyled>
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  );
}
const LoginPageStyled = styled.div`
  /* background: red; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:before {
    background-color: #00000089;
    content: "";
    background-image: url("/images/F03-burger-background.jpg");
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    
  }
  
  /* background-image: url("../../../src/assets/images/F03-burger-background.jpg"); */
  /* background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
  z-index: 0;
// obscuration de l'image de fond
&:before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.178); 
  z-index: 1;

} */
`;
