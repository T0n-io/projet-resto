import { styled } from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../../..";

export default function Cards({ item }) {
  const roundedPrice = item.price.toFixed(2); // Arrondi au centime près (2 décimales)

  return (
    <CardContainerStyled>
      <img src={item.imageSource} alt={item.title} />
      <div className="infos">
        <h2>{item.title}</h2>
        <div className="bottom-card">
          <div className="price">{roundedPrice} €</div>
          <button>Ajouter</button>
        </div>
      </div>
    </CardContainerStyled>
  );
}

const CardContainerStyled = styled.div`
  // css card

  width: 240px;
  height: 330px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px calc(85px / 2) 60px calc(85px / 2);
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
  h2 {
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.P4};
    font-weight: ${theme.weights.bold};
    margin: 0;
  }
  img {
    width: 200px;
    height: 145px;
    margin: 50px 20px 15px 20px;
    /* border: 1px solid green; */
    object-fit: contain;
  }
  .infos {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* border: 1px solid blue; */
    width: 200px;
    height: 110px;
    .bottom-card{
        display: flex;
        justify-content: space-between;
    }
    .price {
      color: ${theme.colors.primary};
    }
    button {
      border: none;
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      font-weight: ${theme.weights.bold};
      width: 95px;
      height: 38px;
      border-radius: ${theme.borderRadius.round};
    }
  }
`;
Cards.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageSource: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    isAvailable: PropTypes.bool.isRequired,
    isAdvertised: PropTypes.bool.isRequired,
  }).isRequired,
};
