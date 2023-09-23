import { useState } from "react"
import { fakeMenu } from "../../data/fakeMenu"
import { deepClone } from "../utils/array"
import { syncBothMenus } from "../api/product"

export const useMenu = () => { 
 const [menu, setMenu] = useState()


//comportements (gestionnaire de state ou "state handlersg")
const handleAdd = (newProduct, username) => {

    // 1. copie du tableau
    const menuCopy = deepClone(menu)
  
    // 2. ajout du produit
    const menuUpdated = [ newProduct, ...menuCopy ]
  
    // 3. mise à jour du state
    setMenu(menuUpdated)
    syncBothMenus(username, menuUpdated)
  }
  
  const handleDelete = (idOfProductToDelete, username) => {
    //copy du state
    const menuCopy = deepClone(menu)
    //manipulation du state
    const menuUpdated = menuCopy.filter((product) => product.id !== idOfProductToDelete);
    //mise à jour du state
    setMenu(menuUpdated);
    syncBothMenus(username, menuUpdated)
  };
  const handleEdit = (productBeingEdited, username) => { 
  
  // console.log("productBeingEdited: ", productBeingEdited);
    //1. Copie du state (deep clone)
    const menuCopy = deepClone(menu)
  
    //2. Manipulation de la copie du state
    const indexOfProductToEdit = menu.findIndex(
      (menuProduct) => menuProduct.id === productBeingEdited.id
      )
    menuCopy[indexOfProductToEdit] = productBeingEdited
    //3. Mise à jour du state
    setMenu(menuCopy)
    syncBothMenus(username, menuCopy)
  }
  
  const resetMenu = (username) => {
    setMenu(fakeMenu.LARGE);
    syncBothMenus(username, fakeMenu.LARGE)

  }; 
  
    return {menu, setMenu, handleAdd, handleDelete, resetMenu, handleEdit}
 }