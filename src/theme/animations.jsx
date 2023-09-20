import { css } from "styled-components";

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