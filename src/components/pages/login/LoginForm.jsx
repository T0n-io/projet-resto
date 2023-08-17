import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { theme } from "../../..";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

export default function LoginForm() {
  //state
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  //comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  // affichage

  return (
    <>
      <LoginFormStyled action="submit" onSubmit={handleSubmit}>
        <div>
          <h1>Bienvenue chez nous !</h1>
          <hr />
          <h2>Connectez vous</h2>
        </div>
        <TextInput
          value={inputValue}
          onChange={handleChange}
          placeholder={"Entrez votre prénom"}
          required
          Icon={<BsPersonCircle className={"icon"} />}
          className={"input-container"}
        />
        
       <PrimaryButton label={"Accéder à mon espace"} Icon={<IoChevronForward className="icon" />} />
      </LoginFormStyled>
    </>
  );
}
const LoginFormStyled = styled.form`
  font-family: "Amatic SC", cursive;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;

  hr {
    width: 100%;
    border: solid 1.5px ${theme.colors.primary_burger};
    margin-bottom: 40px;
  }

  h1 {
    font-size: 48px;
    color: ${theme.colors.white};
    font-family: "Amatic SC", cursive;
  }
  h2 {
    font-size: 36px;
    color: ${theme.colors.white};
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    font-size: ${theme.fonts.P1};
  }
  
`;
