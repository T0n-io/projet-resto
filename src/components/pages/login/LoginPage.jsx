// import React, { useState } from "react";
import { styled } from "styled-components";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  // affichage
  return (
    <LoginPageStyled>
      <LoginForm />
    </LoginPageStyled>
  );
}
const LoginPageStyled = styled.div`
  background-image: url("../../../src/assets/images/F03-burger-background.jpg");
  background-size: cover;
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

}
`;
