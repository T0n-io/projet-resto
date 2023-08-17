import { styled } from "styled-components";
import Logo from "../../reusable-ui/Logo";
import { useParams } from "react-router";

export default function NavBar() {
//state
  const {username} = useParams();
  console.log("navusername: ", username);


  return <NavBarStyled>
    <Logo className="small-logo"/>
    <div>Hey, {username}</div>
  </NavBarStyled>;
}

const NavBarStyled = styled.div`
  background: white;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px 0 20px;
  font-family: "Open Sans";

  .small-logo{
    transform: scale(1);
  }
`;
