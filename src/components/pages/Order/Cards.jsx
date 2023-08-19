import { styled } from "styled-components";

export default function Cards({ item }) {
  return (
    <CardContainerStyled>
      <img src={item.imageSource} alt={item.title} />
      <h2>{item.title}</h2>
      <div className="bottom">
        <div className="price">{item.price}</div>
        <button>Ajouter</button>
      </div>
    </CardContainerStyled>
  );
}

const CardContainerStyled = styled.div`
  // css card

  width: 240px;
  height: 330px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px calc(85px / 2) 60px calc(85px / 2);
  img {
    width: 90%;
    height: 100px;
    border: 1px solid green;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    border: 1px solid blue;
    width: 90%;
  }
`;
