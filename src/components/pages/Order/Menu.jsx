import { useState } from "react";
import { fakeMenu2 } from "../../../../data/fakeMenu";
import { styled } from "styled-components";
import { theme } from "../../..";
import Cards from "../../reusable-ui/Cards";

export default function Menu() {

  const [menu, setMenu] = useState(fakeMenu2);
  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => (
        <Cards
          key={id}
          title={title}
          imageSource={imageSource}
          leftDescription={price}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
   background: ${theme.colors.background_white};
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px; */
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;