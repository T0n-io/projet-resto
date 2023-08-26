import {
  faChevronCircleDown,
  faChevronCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { theme } from "../../..";
import { usePanel } from "../../../context/PanelContext";

export default function Panel() {
  const { isPanelOpen, setIsPanelOpen, activeTab, setActiveTab } = usePanel();
  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
    console.log("SetisPanelOpen ", setIsPanelOpen);
    
 
  };

  return (
    <PanelStyled isPanelOpen={isPanelOpen}>
      <div className="onglets">
        <button className="reduire" onClick={togglePanel}>
          <div className="icon">
            {isPanelOpen ? <FontAwesomeIcon icon={faChevronCircleDown} /> : <FontAwesomeIcon icon={faChevronCircleUp} />}
          </div>
        </button>
        <button className="onglet" onClick={() => setActiveTab("addProduct")}>
          <div>+</div>
          <div className="onglet-text">Ajouter un produit</div>
        </button>
        <button className="onglet" onClick={() => setActiveTab("editProduct")}>
          <div>+</div>
          <div className="onglet-text">Modifier un produit</div>
        </button>
      </div>
      <div className="panel-page-active">
        {activeTab === "addProduct" && "Ici la page pour ajouter un produit"}
        {activeTab === "editProduct" && "Ici la page pour modifier un produit"}
      </div>
    </PanelStyled>
  );
}

const PanelStyled = styled.div`
  display: inline-flex;
  flex-direction: column;
  height: auto;
  position: sticky;
  bottom: 0;
  left: 0;
  /* background: pink; */
  /* width: auto; */
  .onglets {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 71px;
    height: 44px;
    /* background: red; */

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
  .panel-page-active {
    /* display: none; */
    height: 240px;
    background-color: chartreuse;
  }
`;
