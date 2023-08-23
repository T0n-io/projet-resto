import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { theme } from "../../..";

export default function Panel() {
  return (
    <PanelStyled>
      <div className="onglets">
        <button className="reduire">
          <div className="icon">
            <FontAwesomeIcon icon={faChevronCircleDown} />
          </div>
        </button>
        <button className="onglet">
          <div>+</div>
          <div className="onglet-text">Ajouter un produit</div>
        </button>
        <button className="onglet">
          <div>+</div>
          <div className="onglet-text">Modifier un produit</div>
        </button>
      </div>
      <div className="panel-page">Ici la page panel</div>
    </PanelStyled>
  );
}

const PanelStyled = styled.div`
  display: inline-flex;
  flex-direction: column;
  height: 44px;
  position: sticky;
  bottom: 0;
  left: 0;
  /* width: auto; */
  .onglets {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 71px;
    height: 44px;
    .reduire {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 62px;
      height: 43px;
      border-top-left-radius: ${theme.borderRadius.round};
      border-top-right-radius: ${theme.borderRadius.round};
      border: 1px 1px 2px 1px solid ${theme.colors.greyLight};
      background: ${theme.colors.background_white};
      color: ${theme.colors.greyMedium};
    }
    .onglet {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top-left-radius: ${theme.borderRadius.round};
      border-top-right-radius: ${theme.borderRadius.round};
      border: 1px 1px 2px 1px solid ${theme.colors.greyLight};
      background: ${theme.colors.background_white};
      color: ${theme.colors.greyMedium};
      width: 200px;
      /* text-align: center; */
      height: 44px;
      padding: 12px 26px 14px 23px;
      .icon {
        /* padding: 5px; */
        display: flex;
        align-items: center;
        justify-content: center;
        width: 62px;
        height: 43px;
      }
    }
  }
  .panel-page {
    height: 250px;
    display: none;
  }
`;
