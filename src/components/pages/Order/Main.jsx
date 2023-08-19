import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../..";
import Cards from "./Cards";
import { fakeMenu1, fakeMenu2 } from "../../../../data/fakeMenu";

export default function Main() {
  // state
  const { username } = useParams();
  const mergedMenu = [...fakeMenu1, ...fakeMenu2];
  console.log("username: ", username);
  return (
    <MainContainerStyled>
      <div>
        {mergedMenu.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
      
   
      
    </MainContainerStyled>
  );
}

const MainContainerStyled = styled.div`
  width: 100%;
  max-width: 1400px;
  background-color: ${theme.colors.background_white};
  margin: auto;
  height: calc(95vh - 10vh);
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  overflow: scroll;

  background: #f5f5f7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;

  h1,
  button {
    margin: 0 25px;
  }
  // ajout média queries téléphone
  @media (max-width: 768px) {
    width: 100%;
    height: calc(100vh - 10vh);
  }

 
`;
