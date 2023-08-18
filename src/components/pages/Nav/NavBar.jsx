import { styled } from "styled-components";
import { theme } from "../../..";
import NavBarRightSide from "./NavBarRightSide";
import NavBarLeftSide from "./NavBarLeftSide";

// eslint-disable-next-line react/prop-types
export default function NavBar({ username }) {
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <div>
      <NavBarStyled>
        <NavBarLeftSide onClick={handleLogoClick}/>
        
        <NavBarRightSide username={username} />
      </NavBarStyled>
    </div>
  );
}

const NavBarStyled = styled.nav`
  background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  width: 90%;
  max-width: 1400px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  margin: 25px auto 0;

  
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    border-radius: 0%;
    padding: 10px;
    .small-logo {
      transform: scale(0.8);
      padding: 0;
    }
  }
`;
