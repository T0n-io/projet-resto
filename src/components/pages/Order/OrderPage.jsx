/* eslint-disable no-undef */
import NavBar from "./Nav/NavBar";
import Main from "./Main/Main";
import { styled } from "styled-components";
import { theme } from "../../..";
import { useEffect, useRef, useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../enums/products";
import { useMenu } from "../../../hooks/useMenu";
import { useBasket } from "../../../hooks/useBasket";
import { findObjectById } from "../../../utils/array";
import { useParams } from "react-router-dom";
import { getMenu } from "../../../api/product";
import { getLocalStorage } from "../../../utils/window";

export default function OrderPage() {
 // state
 const [isModeAdmin, setIsModeAdmin] = useState(true)
 const [isCollapsed, setIsCollapsed] = useState(false)
 const [currentTabSelected, setCurrentTabSelected] = useState("edit")
 const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
 const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
 const titleEditRef = useRef();
const {menu, setMenu, handleAdd, handleDelete, resetMenu, handleEdit} = useMenu()
const {basket, setBasket, handleAddToBasket, handleDeleteBasketProduct} = useBasket()
  const { username } = useParams();


const handleProductSelected = async (idProductClicked) => { 
  const productClickedOn = findObjectById(idProductClicked, menu);
  await setIsCollapsed(false);
  await setCurrentTabSelected("edit");
  await setProductSelected(productClickedOn);
  titleEditRef.current.focus();

 }

 const initialiseMenu = async () =>  {
  const menuReceived = await getMenu(username)
  setMenu(menuReceived)
 }
 const initialiseBasket = () =>  {
  const basketReceived = getLocalStorage(username)
  setBasket(basketReceived)
 }

 useEffect(() => {
    initialiseMenu()
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [])
 useEffect(() => {
    initialiseBasket()
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [])
 
 //CRUD

const orderContextValue = {
  username,
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
  handleAddToBasket,
  handleDeleteBasketProduct,
  handleProductSelected,

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
