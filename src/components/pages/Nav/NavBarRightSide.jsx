import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../..";
import ToggleButton from "./ToggleButton";

// eslint-disable-next-line react/prop-types
export default function NavBarRightSide({ username }) {
  return (
    <NavBarRightSideStyled>
      <ToggleButton></ToggleButton>
      {/* <div className="admin-button">
        <button>Activer le mode Admin</button></div> */}
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

const NavBarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
  .right-container-child {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
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
  button{
    border: none;
    background: none;
    cursor: pointer;
    
  }
  button:hover{
    color: ${theme.colors.primary};
  }
  .admin-button{
      background: red;
  }
`;
