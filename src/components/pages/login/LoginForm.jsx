import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";

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
        <br />
        <h2>Connectez vous</h2>
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
display: flex;
flex-direction: column;
align-items: center;
background: green;`;
