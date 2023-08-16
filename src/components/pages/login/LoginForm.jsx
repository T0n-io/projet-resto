import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { theme } from "../../..";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import Input from "./Input";

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
        <Input
          value={inputValue}
          onChange={handleChange}
          placeholder={"Entrez votre prénom"}
          required
          Icon={<BsPersonCircle className={"icon"} />}
          className={"input-container"}
        />

        <button className="button-container">
          <span>Accédez à mon espace</span>
          <IoChevronForward className="icon" />
        </button>
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
  
  .button-container {
    width: 100%;
    font-size: 15px;
    font-weight: 800;
    display: flex;
    justify-content: space-evenly;
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
    button {
      background-color: ${theme.colors.primary_burger};
      font-size: 15px;
      font-weight: 800;
      cursor: pointer;
      width: 100%;
      height: 100%;
    }
  }
`;
