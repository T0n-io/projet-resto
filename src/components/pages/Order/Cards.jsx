import { styled } from "styled-components";

export default function Cards() {
  return (
    <CardsStyled>
      <img src="" alt="item" />
      <h2>Burger</h2>
      <div className="bottom">
        <div className="price">5.50</div>
        <button>Ajouter</button>
      </div>
    </CardsStyled>
  );
}

const CardsStyled = styled.div`
  // css card

  width: 240px;
  height: 330px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px calc(85px /2) 60px calc(85px /2);
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
