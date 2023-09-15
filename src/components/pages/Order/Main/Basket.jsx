import { styled } from "styled-components";

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
  background-color: pink;
  display: flex;
  flex-direction: column;


  .head {
    background-color: red;
  }
  .body{
    background-color: blue;
  }
  .footer{
    background-color: green;
  }
`;
