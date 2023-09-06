/* eslint-disable no-undef */
import NavBar from "./Nav/NavBar";
import Main from "./Main/Main";
// import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../..";
// import { PanelProvider } frlleom "../../../context/PanelProvider";
// import { AdminModeProvider } from "../../../context/AdminModeContext";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";

export default function OrderPage() {
 // state
 const [isModeAdmin, setIsModeAdmin] = useState(true)
 const [isCollapsed, setIsCollapsed] = useState(false)
 const [currentTabSelected, setCurrentTabSelected] = useState("add")

 // comportements

 const orderContextValue = {
   isModeAdmin,
   setIsModeAdmin,
   isCollapsed,
   setIsCollapsed,
   currentTabSelected,
   setCurrentTabSelected,
 }
  return (
    // <AdminModeProvider>
    //   <PanelProvider>
    <OrderContext.Provider value={orderContextValue} >
        <OrderPageStyled>
          <div className="container">
            <NavBar />
            <Main />
          </div>
        </OrderPageStyled>
    {/* //   </PanelProvider> */}
    {/* // </AdminModeProvider> */}
    </OrderContext.Provider>
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
