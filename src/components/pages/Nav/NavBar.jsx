import { styled } from "styled-components";
import Logo from "../../reusable-ui/Logo";
import { useParams } from "react-router";
import { theme } from "../../..";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

export default function NavBar() {
  //state
  const { username } = useParams();
  console.log("navusername: ", username);

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <NavBarStyled>
      <button onClick={handleLogoClick} >
      <Logo className="small-logo" />

      </button>
      <div className="right-container">
          <div className="right-container-child">
            <div className="welcome">

            Hey, <span className="nav-user-name">{username}</span>
            </div>
          <Link to="/">
            <button>Se déconnecter</button>
          </Link>
          </div>
        <div >
        <BsPersonCircle className={"icon"} />
      </div>
        </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  background: paleturquoise;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px 0 20px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  max-width: 1400px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  margin: 25px 56px;

  .right-container {
    display: flex;
    align-items: center;

  }
  .right-container-child{
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    
  }
  .welcome{
display: flex;
justify-content: center;
  }
  .icon{
    font-size: 36px;
  }

  .nav-user-name {
    color: ${theme.colors.primary};
    font-weight: ${theme.weights.bold};
  }
  .small-logo {
    transform: scale(1);
  }
  button {
    border: none;
    background: none;
    color: ${theme.colors.greyMedium};
    font-size: ${theme.fonts.XS};
  }
  /* display: flex;
align-items: center;  } */
`;
