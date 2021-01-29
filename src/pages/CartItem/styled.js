import styled from "styled-components";

export const CartItemContent = styled.div`
  height: calc(100vh - 125px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: 40%;

  //tablet
  @media (min-width: 480px) {
    max-width: 80%;
    height: 50%;
  }

  //Desktop
  @media (min-width: 992px) {
    max-width: 50%;
    height: 50%;
  }

  //Huge
  @media (min-width: 1280px) {
    max-width: 50%;
    height: 50%;
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
    transform: scale(1.1);
  }
`;

export const BtnIncrement = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid white;
  border-radius: 50%;
  margin: 3px 5px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  font-size: 1.5rem;
  outline: none;

  &:hover {
    border: 1px solid green;
    color: green;
    cursor: pointer;
    transform: scale(1.2);
    background: rgba(0, 0, 0, 0.9);
  }
`;

export const BtnDecrement = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid white;
  border-radius: 50%;
  margin: 3px 5px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  font-size: 1.5rem;
  outline: none;

  &:hover {
    border: 1px solid red;
    color: red;
    cursor: pointer;
    transform: scale(1.2);
    background: rgba(0, 0, 0, 0.9);
  }
`;
