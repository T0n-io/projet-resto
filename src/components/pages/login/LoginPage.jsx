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
`;
