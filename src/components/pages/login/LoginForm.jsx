import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { theme } from "../../..";

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
        <div>
          <input
            value={inputValue}
            onChange={handleChange}
            type="text"
            placeholder="Entrez votre prénom"
            required
          />
          <button>Accédez à mon espace</button>
        </div>
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
`;
