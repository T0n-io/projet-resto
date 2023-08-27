import { styled } from "styled-components";
import Logo from "../../reusable-ui/Logo";
import { theme } from "../../..";

// eslint-disable-next-line react/prop-types
export default function NavBarLeftSide({onClick}) {
  return (
    <NavBarLeftSideStyled onClick={onClick}>
          <Logo className="small-logo" />
        </NavBarLeftSideStyled>
  )
}

const NavBarLeftSideStyled = styled.button`
    border: none;
    background: none;
    color: ${theme.colors.greyMedium};
    font-size: ${theme.fonts.size.XS};
    cursor: pointer;
    .small-logo {
      transform: scale(1);
    }
    `;