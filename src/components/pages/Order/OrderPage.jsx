import { Link, useParams } from "react-router-dom";
import NavBar from "../Nav/NavBar";
import { theme } from "../../..";
import { styled } from "styled-components";

export default function OrderPage() {
  // state
  const { username } = useParams();
  console.log("username: ", username);
  //comportement
  // affichage
  return (
    <div>
      <NavBar />
      <MainContainer>
        <br /><br /><br />
        <h1>Bonjour {username}</h1>
        <Link to="/">
          <button>Déconnexion</button>
        </Link>
      </MainContainer>
    </div>
  );
}

const MainContainer = styled.div`
  max-width: 1400px;
  background-color: ${theme.colors.white};
  margin: auto;
  height: 80vh;
  
  background: #F5F5F7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
    border-radius: 0px 0px 15px 15px;

  h1, button{
    margin: 0 25px;
  }
`;
