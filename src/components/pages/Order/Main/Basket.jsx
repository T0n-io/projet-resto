import { styled } from "styled-components";
import { theme } from "../../../..";

export default function Basket() {
  return (
    <BasketStyled>
      <div className="head">Head</div>
      <div className="body">Body</div>
      <div className="footer">Footer</div>

    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  /* background-color: pink; */
  display: flex;
  flex-direction: column;


  .head {
    height: 70px;
    background-color: ${theme.colors.background_dark};
  }
  .body{
    flex: 1;
    background-color: ${theme.colors.background_white};
    height: 100%;
  }
  .footer{
    height: 70px;
    background-color: ${theme.colors.background_dark};

  }
`;
