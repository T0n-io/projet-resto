import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

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
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez vous</h2>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Entrez votre prénom"
        required
      />
      <button>Accédez à votre espace</button>
    </LoginFormStyled>
  );
}
const LoginFormStyled = styled.form`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
height: 100vh;

  h1 {
    color: white;
    margin: 0;
    font-size: 48px;
    padding-bottom: 30px;
    border-bottom: solid 2px orange;
  }
  h2 {
    color: white;
    font-size: 36px;

  }
  input {
    width: 400px;
    height: 32px; 
    border-radius: 5px;
    margin: 9px;
    font-size: 15px;
    border: none;
    text-align: center;

   }
  button {
    color: white;
    background-color: orange;
    width: 400px;
    height: 32px;
    border-radius: 5px;
    margin: 9px;
    font-size: 15px;
    border: none;
    
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
