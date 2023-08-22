import { useState } from "react";
import { toast } from "react-toastify";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../..";
import ToggleButton from "./ToggleButton";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/prop-types
export default function NavBarRightSide({ username }) {
  // État pour gérer le bouton de basculement
  const [isModeAdmin, setIsModeAdmin] = useState(false);

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
    setIsModeAdmin(!isModeAdmin)
    } 


  return (
    <NavBarRightSideStyled>
      <ToggleButton
        isModeAdmin={isModeAdmin}
        onToggle={displayToastNotification}
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="désactiver LE MODE ADMIN"
      />
      <div className="right-container-child">
        <div className="welcome">
          Hey,<span className="nav-user-name">{username}</span>
        </div>
        <Link to="/">
          <button>Se déconnecter</button>
        </Link>
      </div>
      <div>
        <BsPersonCircle className={"icon"} />
      </div>
    </NavBarRightSideStyled>
  );
}

// Votre style déjà existant ici

const NavBarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
  .right-container-child {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    padding-left: 50px;
  }

  .welcome {
    text-align: right;
  }
  .icon {
    font-size: 36px;
    color: ${theme.colors.greyDark};
  }

  .nav-user-name {
    color: ${theme.colors.primary};
    font-weight: ${theme.weights.bold};
    margin-left: 3px;
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
  button:hover {
    color: ${theme.colors.primary};
  }

  // pour le toast
*
  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
