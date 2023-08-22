import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../..";

// eslint-disable-next-line react/prop-types
export default function Profile({ userName }) {
  return (
    <ProfileStyled userName={userName}>
        <div className="right-container-child">
        <div className="welcome">
          Hey,<span className="nav-user-name">{userName}</span>
        </div>
        <Link to="/">
          <button>Se déconnecter</button>
        </Link>
      </div>
      <div>
        <BsPersonCircle className={"icon"} />
      </div>
    </ProfileStyled>
  )
}

const ProfileStyled = styled.div`

    display: flex;
    flex-direction: row;
    margin-right: 10px;
    padding-left: 50px;

  .welcome {
    text-align: right;
  }
  .icon {
    font-size: 36px;
    color: ${theme.colors.greyDark};
    padding-left: 5px;
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

 
`;