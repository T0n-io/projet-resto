/* eslint-disable no-undef */
import NavBar from "./Nav/NavBar";
import Main from "./Main/Main";
import { styled } from "styled-components";
import { theme } from "../../..";
import { useRef, useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../enums/products";
import { useMenu } from "../../../hooks/useMenu";

export default function OrderPage() {
 // state
 const [isModeAdmin, setIsModeAdmin] = useState(true)
 const [isCollapsed, setIsCollapsed] = useState(false)
 const [currentTabSelected, setCurrentTabSelected] = useState("edit")
 const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
 const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
 const titleEditRef = useRef();
const {menu, setMenu, handleAdd, handleDelete, resetMenu, handleEdit} = useMenu()
const {basket} = useBasket()


 //CRUD

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
  handleDelete,
  resetMenu,
  newProduct,
  setNewProduct,
  productSelected,
  setProductSelected,
  handleEdit,
  titleEditRef,
  basket,

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
    height: 833px;
    max-width: 1400px;
    width: 90%;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
