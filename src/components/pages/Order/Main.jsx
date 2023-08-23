import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../..";
import Cards from "../../reusable-ui/Cards";
import { fakeMenu2 } from "../../../../data/fakeMenu";
import { useState } from "react";
import Menu from "./Menu";

export default function Main() {
  // state
  const { username } = useParams();
  const [menu, setMenu] = useState(fakeMenu2);
  console.log("username: ", username);
  return (
    <MainStyled className="main">
      {/* <div className="basket">Basket</div> */}

      <Menu />
    </MainStyled>
  );
}

const MainStyled = styled.div`

background: ${theme.colors.background_white};
  flex: 1; // or you can also use this : height: calc(95vh - 10vh);

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  grid-template-columns: 1fr;

  overflow-y: scroll;
  /* .basket {
    background: pink;
  } */







  /* width: 100%;
  max-width: 1400px;
  background-color: ${theme.colors.background_white};
  margin: auto;
  height: calc(95vh - 10vh);
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  overflow: scroll;
  background: #f5f5f7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;

  h1,
  button {
    margin: 0 25px;
  }
  // ajout média queries téléphone
  @media (max-width: 768px) {
    width: 100%;
    height: calc(100vh - 10vh);
  } */
`;
