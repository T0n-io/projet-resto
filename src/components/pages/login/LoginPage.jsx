import { styled } from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {
  // affichage
  return (
    <LoginPageStyled>
      <Logo className="formLogo"/>
      <LoginForm />
    </LoginPageStyled>
  );
}
const LoginPageStyled = styled.div`

/* Ma version */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:before {
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
  ::before{
    background-color: #00000016;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  /* Version de ViDev */
  /* height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ::before {
    content: "";
    background-image: url("/images/F03-burger-background.jpg");
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;

    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    
  } */
`;
