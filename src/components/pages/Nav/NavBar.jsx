import { styled } from "styled-components";
import Logo from "../../reusable-ui/Logo";
import { theme } from "../../..";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
export default function NavBar({ username }) {
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <NavBarStyled>
      <button onClick={handleLogoClick}>
        <Logo className="small-logo" />
      </button>
      <div className="right-container">
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
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
  background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px 0 20px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  width: 90%;
  max-width: 1400px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  margin: 25px auto 0;

  .right-container {
    display: flex;
    align-items: center;
  }
  .right-container-child {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
  }
  .welcome {
    display: flex;
    justify-content: center;
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
  .small-logo {
    transform: scale(1);
  }
  button {
    border: none;
    background: none;
    color: ${theme.colors.greyMedium};
    font-size: ${theme.fonts.XS};
    cursor: pointer;
  }
  @media (max-width: 768px) {
        width: 100%;
        margin: 0;
        border-radius: 0%;
        padding: 10px;
        .small-logo{
          transform: scale(0.8);
          padding: 0;
        }
    }
`;
