import NavBar from "../Nav/NavBar";
import Main from "../Order/Main";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../..";
import { PanelProvider } from "../../../context/PanelContext";

export default function OrderPage() {
  //state
  const { username } = useParams();
  console.log("navusername: ", username);
  // affichage
  return (
    <PanelProvider>
    <OrderPageStyled>
      <div className="container">
      <NavBar username={username} />
      <Main />
      </div>
    </OrderPageStyled>
    </PanelProvider>
  );
}

const OrderPageStyled = styled.div`
  height: 100vh;
  background: ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .container {
    /* background: red; */
    height: 95vh;
    max-width: 1400px;
    width: 90%;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;