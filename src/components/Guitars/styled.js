import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;

  //tablet
  @media (min-width: 480px) {
    height: 1600px;
  }

  //Desktop
  @media (min-width: 992px) {
    height: 980px;
  }

  //Huge
  @media (min-width: 1280px) {
    height: 1620px;
  }
`;

export const Ul = styled.ul`
  list-style-type: none;
  display: grid;

  //tablet
  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 15rem);
    grid-template-rows: repeat(9, 18rem);
    grid-gap: 1.5rem 1.5rem;
  }

  //Desktop
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 15rem);
    grid-template-rows: repeat(3, 18rem);
    grid-gap: 2rem 2rem;
  }

  //Huge
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 20rem);
    grid-template-rows: repeat(3, 30rem);
    grid-gap: 2rem 2rem;
  }
`;

export const Li = styled.li`
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 100%;
  height: 83%;
  object-fit: cover;
  display: block;
  opacity: 0.5;

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const Span = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;
