import { styled } from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../..";

// eslint-disable-next-line react/prop-types
export default function Cards({ title, imageSource, leftDescription }) {
  // eslint-disable-next-line react/prop-types
  const roundedPrice = leftDescription.toFixed(2); // Arrondi au centime près (2 décimales)

  return (
    <CardContainerStyled>
      <img src={imageSource} alt={title} />
      <div className="infos">
        <h2>{title}</h2>
        <div className="bottom-card">
          <div className="left-description">{roundedPrice} €</div>
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
  background-color: ${theme.colors.white};
  h2 {
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.P4};
    font-weight: ${theme.weights.bold};
    margin: 0;
    white-space: nowrap; // Empêche le texte de passer à la ligne
    overflow: hidden; // Cache le texte excédentaire
    text-overflow: ellipsis; // Affiche "..." à la fin du texte tronqué
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
    width: 200px;
    height: 110px;
    .bottom-card {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .left-description {
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
      cursor: pointer;
      &:hover:not(:active) {
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.primary};
        color: ${theme.colors.primary};
        transition: 0.3s ease-in-out;
      }
      &:active,
      &:focus {
        background-color: ${theme.colors
          .primary}; /* Couleur normale au moment du click ou du focus */
        color: ${theme.colors
          .white}; /* Couleur normale au moment du click ou du focus */
        outline: none; /* Supprime le contour par défaut */
      }
    }
  }
`;

