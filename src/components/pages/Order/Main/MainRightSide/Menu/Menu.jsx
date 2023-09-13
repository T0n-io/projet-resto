import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../..";
import { formatPrice } from "../../../../../../utils/maths.jsx";
import Card from "../../../../../reusable-ui/Card.jsx";
import OrderContext from "../../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsClicked } from "./helper";

export default function Menu() {
  //State
  const { menu, isModeAdmin, handleDelete, resetMenu, productSelected, setProductSelected, setIsCollapsed, setCurrentTabSelected} =
    useContext(OrderContext);
  //comportements
  const handleClick = (idProductClicked) => {
    if (!isModeAdmin) return;
    setIsCollapsed(false);
    setCurrentTabSelected("edit");
    const productClickedOn = menu.find(( product ) => product.id === idProductClicked);
    setProductSelected(productClickedOn);
  }



  //affichage


  // affichage
  if (menu.length === 0) return <EmptyMenuAdmin onReset={resetMenu} />
    if (menu.length === 0 && !isModeAdmin) return <EmptyMenuClient/> 
  
  const handleCardDelete = (event, idProductToDelete) => { 
    event.stopPropagation()
    handleDelete(idProductToDelete)
   }

  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={
              imageSource === "" ? "/images/coming-soon.png" : imageSource
            }
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={(event) => handleCardDelete(event, id)}
            onClick={() => handleClick(id)}
            isHoverable={isModeAdmin}
            isSelected={checkIfProductIsClicked(id, productSelected.id)}
          />
        );
      })}
    </MenuStyled>
  );
}

  const MenuStyled = styled.div`
    background: ${theme.colors.background_white};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    overflow-y: scroll;
  `;
