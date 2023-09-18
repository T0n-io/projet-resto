import { createContext } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  currentTabSelected: false,
  setCurrentTabSelected: () => {},
  
  menu : [],
  handleClick: () => {},
  handleDelete: () => {},
  resetMenu : () => {},

  newProduct : {},
  setNewProduct: () => {},

  productSelected : [],
  setProductSelected: () => {},
  handleEdit: () => {},

  titleEditRef: {},

  basket: [],
  handleAddToBasket: () => {},
  
  handleDeleteBasketProduct: () => {},
  
})
