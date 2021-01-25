import styled from "styled-components";

export const CartItemContent = styled.div`
  height: calc(100vh - 125px);
  border: 3px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 100%;
  height: 60%;

  //tablet
  @media (min-width: 480px) {
    max-width: 60%;
    height: 60%;
  }

  //Desktop
  @media (min-width: 992px) {
    max-width: 60%;
    height: 60%;
  }

  //Huge
  @media (min-width: 1280px) {
    max-width: 60%;
    height: 60%;
  }
`;

export const Para = styled.p`
  font-size: 18px;
  font-weight: 600;
  padding: 8px;
`;

export const Button = styled.button`
  width: 150px;
  padding: 8px;
  margin: 10px;
  border: 1px solid white;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  outline: none;

  &:hover {
    outline: none;
    background: rgba(0, 0, 0, 0.9);
    color: white;
    cursor: pointer;
  }
`;
