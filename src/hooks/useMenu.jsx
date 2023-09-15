import { useState } from "react"
import { fakeMenu } from "../../data/fakeMenu"
import { deepClone } from "../utils/array"

export const useMenu = () => { 
 const [menu, setMenu] = useState(fakeMenu.LARGE)


//comportements (gestionnaire de state ou "state handlersg")
const handleAdd = (newProduct) => {

    // 1. copie du tableau
    const menuCopy = deepClone(menu)
  
    // 2. ajout du produit
    const menuUpdated = [ newProduct, ...menuCopy ]
  
    // 3. mise à jour du state
    setMenu(menuUpdated)
  }
  
  const handleDelete = (idOfProductToDelete) => {
    //copy du state
    const menuCopy = deepClone(menu)
    //manipulation du state
    const menuUpdated = menuCopy.filter((product) => product.id !== idOfProductToDelete);
    // console.log("menuUpdated: ", menuUpdated);
    //mise à jour du state
    setMenu(menuUpdated);
  };
  const handleEdit = (productBeingEdited) => { 
  
  console.log("productBeingEdited: ", productBeingEdited);
    //1. Copie du state (deep clone)
    const menuCopy = deepClone(menu)
  
    //2. Manipulation de la copie du state
    const indexOfProductToEdit = menu.findIndex(
      (menuProduct) => menuProduct.id === productBeingEdited.id
      )
    // console.log("indexOfProductToEdit: ", indexOfProductToEdit);
  // }
    menuCopy[indexOfProductToEdit] = productBeingEdited
    //3. Mise à jour du state
    setMenu(menuCopy)
  }
  
  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  }; 
  
    return {menu, setMenu, handleAdd, handleDelete, resetMenu, handleEdit}
 }