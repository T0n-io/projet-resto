import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { theme } from "../../..";
import Logo from "./Logo";
import { BsPersonCircle } from "react-icons/bs";

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
        <Logo />
        <h1>Bienvenue chez nous !</h1>
        <br />
        <h2>Connectez vous</h2>
        <div className="input-container">
          <BsPersonCircle className="iconName" />
          <input
            value={inputValue}
            onChange={handleChange}
            type="text"
            placeholder="Entrez votre prénom"
            required
          />
        </div>
        <button>Accédez à mon espace</button>
      </LoginFormStyled>
    </>
  );
}
const LoginFormStyled = styled.form`
position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  z-index:200;

  .input-container {
    position: relative;
    display: inline-block;
  }

  .iconName {
    position: absolute;
    top: 50%;
    left: 30px; /* Ajustez ce nombre pour déplacer l'icône horizontalement */
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    color: ${theme.colors.greyMedium}
  }
  h1 {
    color: ${theme.colors.white};
    margin: 0;
    font-size: 48px;
    padding-bottom: 30px;
    border-bottom: solid 2px ${theme.colors.primary_burger};
    font-family: "Amatic SC", cursive;
  }
  h2 {
    color: ${theme.colors.white};
    font-size: 36px;
    font-family: "Amatic SC", cursive;
  }
  input {
    width: 400px;
    height: 32px;
    border-radius: ${theme.borderRadius.round};
    margin: ${theme.spacing.xs};
    font-size: ${theme.fonts.P0};
    border: none;
    padding-left: 40px;
    
  }
  button {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    width: 400px;
    height: 32px;
    border-radius: ${theme.borderRadius.round};
    margin: 9px;
    font-size: 15px;
    border: none;
    font-weight: ${theme.weights.heavy};
  }
`;

// 4 méthodes pour ajouter du style à un composants
// 1. inline style
// Pour rajouter du style a un niveau local très rapipement, pour faire des tests
// style={{ backgroundColor: "red" }}
// 2. object style
// 3. css module (avec className)
// 4. global style (index.css)
// 5. styled-components
