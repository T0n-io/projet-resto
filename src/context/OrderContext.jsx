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
  handleEdit: () => {},
  resetMenu : () => {},

  newProduct : {},
  setNewProduct: () => {},

  productSelected : [],
  setProductSelected: () => {},
  handleProductSelected: () => {},

  titleEditRef: {},

  basket: [],
  handleAddToBasket: () => {},
  
  handleDeleteBasketProduct: () => {},
})
