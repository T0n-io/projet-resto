import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../..";
import { formatPrice } from "../../../../../../utils/maths.jsx";
import Card from "../../../../../reusable-ui/Card.jsx";
import OrderContext from "../../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";

export default function Menu() {
  //State
  const { menu, isModeAdmin, handleDelete, resetMenu, setProductSelected } =
    useContext(OrderContext);
  //comportements

  //affichage
  const handleClick = (idProductClicked) => {
    const productClickedOn = menu.find(( product ) => product.id === idProductClicked);
    setProductSelected(productClickedOn);
  }


  // affichage
  if (menu.length === 0) return <EmptyMenuAdmin onReset={resetMenu} />
    if (menu.length === 0 && !isModeAdmin) return <EmptyMenuClient/> 
  

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
            onDelete={() => handleDelete(id)}
            onClick={() => handleClick(id)}
            isHoverable={isModeAdmin}
            isSelected={true}
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
