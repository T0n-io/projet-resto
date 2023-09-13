/* eslint-disable no-undef */
import NavBar from "./Nav/NavBar";
import Main from "./Main/Main";
import { styled } from "styled-components";
import { theme } from "../../..";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../../data/fakeMenu";
import { EMPTY_PRODUCT } from "../../../enums/products";

export default function OrderPage() {
 // state
 const [isModeAdmin, setIsModeAdmin] = useState(true)
 const [isCollapsed, setIsCollapsed] = useState(false)
 const [currentTabSelected, setCurrentTabSelected] = useState("edit")
 const [menu, setMenu] = useState(fakeMenu.SMALL)
 const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
 const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);


 //CRUD
//comportements
const handleAdd = (newProduct) => {

  // 1. copie du tableau
  const menuCopy = JSON.parse(JSON.stringify(menu))

  // 2. ajout du produit
  const menuUpdated = [ newProduct, ...menuCopy ]

  // 3. mise à jour du state
  setMenu(menuUpdated)
}

const handleDelete = (idOfProductToDelete) => {
  //copy du state
  const menuCopy = Json.parse(Json.stringify(menu))
  //manipulation du state
  const menuUpdated = menuCopy.filter((product) => product.id !== idOfProductToDelete);
  console.log("menuUpdated: ", menuUpdated);
  //mise à jour du state
  setMenu(menuUpdated);
};
const handleEdit = (productBeingEdited) => { 

console.log("productBeingEdited: ", productBeingEdited);
  //1. Copie du state (deep clone)
  const menuCopy = JSON.parse(JSON.stringify(menu))

  //2. Manipulation de la copie du state
  const indexOfProductToEdit = menu.findIndex(
    (menuProduct) => menuProduct.id === productBeingEdited.id
    )
  console.log("indexOfProductToEdit: ", indexOfProductToEdit);
// }
  menuCopy[indexOfProductToEdit] = productBeingEdited
  //3. Mise à jour du state
  setMenu(menuCopy)
}

const resetMenu = () => {
  setMenu(fakeMenu.MEDIUM);
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
  handleDelete,
  resetMenu,
  newProduct,
  setNewProduct,
  productSelected,
  setProductSelected,
  handleEdit,
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
