import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { theme } from "../../../theme";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput";
import Button from "../../reusable-ui/Button";
import { authenticateUser } from "../../../api/user.jsx";
import Welcome from "./Welcome";

export default function LoginForm() {
  //state
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  //comportement
  const handleSubmit = async (event) => {
    event.preventDefault();

    const userReceived = await authenticateUser(username);
    setUsername("");
    navigate(`order/${userReceived.username}`);
  };
  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  // affichage

  return (
    <>
      <LoginFormStyled action="submit" onSubmit={handleSubmit}>
        <Welcome />
        <TextInput
          value={username}
          onChange={handleChange}
          placeholder={"Entrez votre prénom"}
          required
          Icon={<BsPersonCircle />}
          className={"input-login"}
          version="normal"
        />

        <Button label={"Accéder à mon espace"} Icon={<IoChevronForward />} />
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
  border-radius: ${theme.borderRadius.round};

  hr {
    /* width: 100%; */
    border: solid 1.5px ${theme.colors.loginLine};
    margin-bottom: 40px;
  }

  h1 {
    font-size: ${theme.fonts.size.P5};
    color: ${theme.colors.white};
  }
  h2 {
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.white};
    margin: 20px 10px 10px;
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    font-size: ${theme.fonts.size.P1};
  }
  .input-login {
    margin: 18px 0; // must be handled by parent
    padding: 18px 24px;
  }
`;
