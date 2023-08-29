import {
  faChevronCircleDown,
  faChevronCircleUp,
  faPen,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components"; // Corrigez cette ligne
import { theme } from "../../../../../..";
import { usePanel } from "../../../../../../context/PanelProvider";
import { useAdminMode } from "../../../../../../context/AdminModeContext"; // Assurez-vous que le chemin est correct
import { TabButton } from "./TabPanel";

export default function Panel() {
  const {
    isPanelOpen,
    setIsPanelOpen,
    activeTab,
    // setActiveTab,
    handleTabClick,
  } = usePanel();
  const [isModeAdmin] = useAdminMode(); // Ajoutez cette ligne

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
    console.log("SetisPanelOpen ", setIsPanelOpen);
  };

  if (!isModeAdmin) {
    // Corrigez cette condition
    return null;
  }

  return (
    <PanelStyled>
      <div className="onglets">
        <button className="reduire" onClick={togglePanel}>
          <div className="icon">
            {isPanelOpen ? (
              <FontAwesomeIcon icon={faChevronCircleDown} />
            ) : (
              <FontAwesomeIcon icon={faChevronCircleUp} />
            )}
          </div>
        </button>
        <TabButton
          isActive={activeTab === "addProduct"}
          onClick={() => handleTabClick("addProduct")}
          icon={faPlus}
          label="Ajouter un produit"
        />
        <TabButton
          isActive={activeTab === "editProduct"}
          onClick={() => handleTabClick("editProduct")}
          icon={faPen}
          label="Modifier un produit"
        />
      </div>
      <div className={`panel-page ${isPanelOpen ? "open" : "closed"}`}>
        {activeTab === "addProduct" && "Ajouter un produit"}
        {activeTab === "editProduct" && "Modifier un produit"}
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
      &.active {
        background: ${theme.colors.dark};
        color: ${theme.colors.white};
      }
      &:hover {
        cursor: pointer;
        /* background: ${theme.colors.dark}; */
        /* color: ${theme.colors.white}; */
        text-decoration: underline;
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
    background-color: ${theme.colors.background_white};
    transition: height 0.5s ease-in-out;
    box-shadow: ${theme.shadows.subtle};
    padding: 20px;
    border: 1px solid ${theme.colors.greyLight};
  }
`;
