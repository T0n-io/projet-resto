import { css, keyframes } from "styled-components";

export const adminAnimation = css`
  .admin-appear {
    opacity: 0.1;
    transform: translateY(100%);
    &.admin-appear-active {
      opacity: 1;
      transform: translateY(0%);
      transition: all 500ms;
    }
  }
`;

export const basketAnimation = css`
.basket-card-transition-appear {
    .transition {
      transform: translateX(100px);
      opacity: 0%;
    }
  }
  .basket-card-transition-appear-active {
    .transition {
      transform: translateX(0px);
      transition: 300ms;
      opacity: 100%;
    }
  }
  .basket-card-transition-enter {
    .transition {
      transform: translateX(100px);
      opacity: 0%;
    }
  }
  .basket-card-transition-enter-active {
    .transition {
      transform: translateX(0px);
      transition: 0.5s;
      opacity: 100%;
    }
  }
  .basket-card-transition-exit {
    .transition {
      transform: translateX(0px);
      opacity: 100%;
    }
  }
  .basket-card-transition-exit-active {
    .transition {
      transform: translateX(-100px);
      opacity: 0%;
      transition: 0.5s;
    }
  }
`;

export const fadeInFromRight = keyframes`

0%{
  position: absolute;
  opacity: 0;
  z-index: -1;
  transform: translateX(100%);
}

100%{
  opacity: 1;
  transform: translateX(0px);
}

`

export const menuAnimation = css`
/*Mounting*/
.menu-animation-enter{
  opacity: 0.01;
  transform: translateX(-120px);
  &.menu-animation-enter-active{
    opacity: 1;
    transform: translateX(0px);
    transition: all 300ms ease-out;
  }
}
/*Unmounting*/
.menu-animation-exit{
  opacity: 1;
  transform: translateX(0px);
  &.menu-animation-exit-active{
    opacity: 0.01;
    transition: 300ms ease-out;
  }
}
`

export const fadeInFromBottom = keyframes`
0%{
  transform: translateY(100%);
  opacity: 0;
}

100%{
  transform: translateY(0%);
  opacity: 1;
}
`
