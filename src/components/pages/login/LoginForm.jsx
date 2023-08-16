import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { theme } from "../../..";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";

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
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h1>Connectez vous</h1>
        <div className="input-container">
          <BsPersonCircle className="icon" />
          <input
            value={inputValue}
            onChange={handleChange}
            type="text"
            placeholder="Entrez votre prénom"
            required
          />
        </div>
        <button className="button-container">
          <span>Accédez à mon espace</span>
          <IoChevronForward className="icon"/>
        </button>
      </LoginFormStyled>
    </>
  );
}
const LoginFormStyled = styled.form`
  background: green;
  font-family: "Amatic SC", cursive;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  hr {
    width: 100%;
    border: solid 1.5px ${theme.colors.primary_burger};
    margin-bottom: 40px;
  }
  h1 {
    font-size: 48px;
    color: ${theme.colors.white};
  }
  .input-container {
    width: 100%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;
    background-color: ${theme.colors.white};
    .icon {
      color: ${theme.colors.greyMedium};
      font-size: 15px;
      margin-right: 8px;
    }
    input {
      border: none;
      text-align: left;
      width: 100%;
    }
    ::placeholder {
      color: ${theme.colors.greyMedium};

  }
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

    .icon{
      font-size: 15px;
      margin-left: 10px;
      margin-top: 3px;
    }
   
    
    &:hover:not(disabled) {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary_burger};
      border: solid 1.5px ${theme.colors.primary_burger};
      transition: all 0.2s ease-out;
    }
    &:active{
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary_burger};
      border: solid 1.5px ${theme.colors.primary_burger};
    }
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }    
    button{
      background-color: ${theme.colors.primary_burger};
      font-size: 15px;
      font-weight: 800;
      cursor: pointer;
      width: 100%;
      height: 100%;
/*       

      }
    }
    }
`;
