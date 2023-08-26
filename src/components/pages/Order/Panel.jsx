import { faChevronCircleDown, faChevronCircleUp, faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";  // Corrigez cette ligne
import { theme } from "../../..";
import { usePanel } from "../../../context/PanelProvider";
import { useAdminMode } from "../../../context/AdminModeContext";  // Assurez-vous que le chemin est correct

export default function Panel() {
  const { isPanelOpen, setIsPanelOpen, activeTab, setActiveTab } = usePanel();
  const [isModeAdmin] = useAdminMode();  // Ajoutez cette ligne

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
    console.log("SetisPanelOpen ", setIsPanelOpen);
  };

  if (!isModeAdmin) {  // Corrigez cette condition
    return null;
  }

    

  return (
    <PanelStyled>
      <div className="onglets">
        <button className="reduire" onClick={togglePanel}>
          <div className="icon">
            {isPanelOpen ? <FontAwesomeIcon icon={faChevronCircleDown} /> : <FontAwesomeIcon icon={faChevronCircleUp} />}
          </div>
        </button>
        <button className={`onglet ${activeTab === "addProduct" ? "active" : ""}`} onClick={() => setActiveTab("addProduct")}>
          <div><FontAwesomeIcon icon={faPlus} /></div>
          <div className="onglet-text">Ajouter un produit</div>
        </button>
        <button className={`onglet ${activeTab === "editProduct" ? "active" : ""}`} onClick={() => setActiveTab("editProduct")}>
          <div>
          <FontAwesomeIcon icon={faPen} />
          </div>
          <div className="onglet-text">Modifier un produit</div>
        </button>
      </div>
      <div className={`panel-page ${isPanelOpen ? 'open' : 'closed'}`}>
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
        &.active{
          background: ${theme.colors.dark};
          color: ${theme.colors.white};
        }
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
    /* display: none; */
    height: 0px;
    transition: height 0.5s ease-in-out;

  }
  .panel-page.open {
    /* display: none; */
    height: 240px;
    background-color: red;
    transition: height 0.5s ease-in-out;
  }
`;
