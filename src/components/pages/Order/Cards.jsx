import { styled } from "styled-components";
import PropTypes from "prop-types";

export default function Cards({ item }) {
    const roundedPrice = item.price.toFixed(2); // Arrondi au centime près (2 décimales)
  
    return (


    <CardContainerStyled>
      <img src={item.imageSource} alt={item.title} />
      <h2>{item.title}</h2>
      <div className="bottom">
        <div className="price">{roundedPrice}</div>
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
    width: 200px;
    height: 145px;
    border: 1px solid green;
    object-fit: contain;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    border: 1px solid blue;
    width: 90%;
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