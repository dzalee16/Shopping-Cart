import React from "react";
import { Link } from "react-router-dom";
import { Container, Ul, Li, Img, Span } from "./styled.js";

const Guitars = ({ guitars }) => {
  return (
    <Container>
      <Ul>
        {guitars.map((guitar, index) => (
          <Li key={index}>
            <Link to={`/cart/${guitar.id}`}>
              <Img src={guitar.url} alt="guitars" />
            </Link>
            <Span>Model: {guitar.name}</Span>
            <Span>Price: {guitar.price} $</Span>
          </Li>
        ))}
      </Ul>
    </Container>
  );
};

export default Guitars;
