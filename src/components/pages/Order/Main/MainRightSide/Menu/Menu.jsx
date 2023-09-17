import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../..";
import { formatPrice } from "../../../../../../utils/formatPrice.jsx";
import Card from "../../../../../reusable-ui/Card.jsx";
import OrderContext from "../../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsClicked } from "./helper";
import { EMPTY_PRODUCT, IMAGE_COMMING_SOON } from "../../../../../../enums/products";
import { find } from "../../../../../../utils/array";


export default function Menu() {
  //State
  const {
    menu,
    isModeAdmin,
    handleDelete,
    resetMenu,
    productSelected,
    setProductSelected,
    setIsCollapsed,
    setCurrentTabSelected,
    titleEditRef,
    handleAddToBasket,
    handleDeleteBasketProduct,
  } = useContext(OrderContext);
  //comportements
  const handleClick = async (idProductClicked) => {

    if (!isModeAdmin) return;

    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    const productClickedOn = find(idProductClicked, menu);    
    await setProductSelected(productClickedOn);
    titleEditRef.current.focus();
  };

  //affichage

  // affichage
  if (menu.length === 0) return <EmptyMenuAdmin onReset={resetMenu} />;
  if (menu.length === 0 && !isModeAdmin) return <EmptyMenuClient />;

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    handleDelete(idProductToDelete);
    handleDeleteBasketProduct(idProductToDelete);
    idProductToDelete === productSelected.id && setProductSelected(EMPTY_PRODUCT);
    titleEditRef.current.focus();

  };

  const handleAddButton = (event, idProductToAdd) => {
     event.stopPropagation()
    const productToAdd = find(idProductToAdd, menu)
    handleAddToBasket(productToAdd)
  }

  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_COMMING_SOON}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={(event) => handleCardDelete(event, id)}
            onClick={() => handleClick(id)}
            $isHoverable={isModeAdmin}
            $isSelected={checkIfProductIsClicked(id, productSelected.id)}
            onAdd={(event) => handleAddButton(event, id)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
`;
