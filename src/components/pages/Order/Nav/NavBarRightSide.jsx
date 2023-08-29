import { toast } from "react-toastify";
import styled from "styled-components";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Profile";
// import { useAdminMode } from "../../../../context/AdminModeContext";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";

// eslint-disable-next-line react/prop-types
export default function NavBarRightSide() {
  // État pour gérer le bouton de basculement
  const {isModeAdmin, setIsModeAdmin} = useContext(OrderContext);

  // Fonction pour gérer le basculement et afficher une notification
  const displayToastNotification = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        icon: <FontAwesomeIcon icon={faUserSecret} size="xl" />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsModeAdmin(!isModeAdmin);
  };

  return (
    <NavBarRightSideStyled>
      <ToggleButton
        isModeAdmin={isModeAdmin}
        onToggle={displayToastNotification}
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="désactiver LE MODE ADMIN"
      />
      <Profile />
    </NavBarRightSideStyled>
  );
}

// Votre style déjà existant ici

const NavBarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;
