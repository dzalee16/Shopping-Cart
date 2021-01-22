import React from "react";
import { Container, Ul, Li, Img, Span } from "./styled.js";

const Guitars = ({ guitars }) => {
  return (
    <Container className="guitars">
      <Ul>
        {guitars.map((guitar, index) => (
          <Li key={index}>
            <Img src={guitar.url} alt="guitars" />
            <Span>Model: {guitar.name}</Span>
            <Span>Price: {guitar.price} $</Span>
          </Li>
        ))}
      </Ul>
    </Container>
  );
};

export default Guitars;
