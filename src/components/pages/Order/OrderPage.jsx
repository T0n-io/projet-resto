/* eslint-disable no-undef */
import NavBar from "./Nav/NavBar";
import Main from "./Main/Main";
import { styled } from "styled-components";
import { theme } from "../../..";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../../data/fakeMenu";

export default function OrderPage() {
 // state
 const [isModeAdmin, setIsModeAdmin] = useState(true)
 const [isCollapsed, setIsCollapsed] = useState(false)
 const [currentTabSelected, setCurrentTabSelected] = useState("add")
 const [menu, setMenu] = useState(fakeMenu.LARGE)


//comportements
const handleAdd = (newProduct) => {

  // 1. copie du tableau
  const menuCopy = [...menu]

  // 2. ajout du produit
  const menuUpdated = [ newProduct, ...menuCopy ]

  // 3. mise à jour du state
  setMenu(menuUpdated)
}

const handleDelete = (idOfProductToDelete) => {
  //copy du state
  const menuCopy = [...menu];
  //manipulation du state
  const menuUpdated = menuCopy.filter((product) => product.id !== idOfProductToDelete);
  console.log("menuUpdated: ", menuUpdated);
  //mise à jour du state
  setMenu(menuUpdated);
};

const orderContextValue = {
  isModeAdmin,
  setIsModeAdmin,
  isCollapsed,
  setIsCollapsed,
  currentTabSelected,
  setCurrentTabSelected,
  handleAdd,
  menu,
  setMenu,
  handleDelete
}


 // comportements

 
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
