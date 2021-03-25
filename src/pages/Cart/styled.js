import styled from "styled-components";

export const CartContent = styled.div`
  height: calc(100vh - 165px);

  @media only screen and (max-width: 480px) {
    height: 100%;
  }

  @media only screen and (max-height: 950px) {
    height: 100%;
  }
`;
