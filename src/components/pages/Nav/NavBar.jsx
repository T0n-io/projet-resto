import { styled } from "styled-components";
import { theme } from "../../..";
import NavBarRightSide from "./NavBarRightSide";
import NavBarLeftSide from "./NavBarLeftSide";
import { refreshPage } from "../../../utils/window";

// eslint-disable-next-line react/prop-types
export default function NavBar({ username }) {
  // const handleLogoClick = () => {
  //   window.location.reload();
  // };

  return (
    <div>
      <NavBarStyled>
        <NavBarLeftSide onClick={refreshPage}/>
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
  font-size: 16px;
  width: 100%;
  max-width: 1400px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  border-bottom: solid 1px ${theme.colors.greyLight};
  
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
