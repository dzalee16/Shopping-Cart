import React from "react";
import { Container, Ul } from "./styled.js";

const Guitars = ({ guitars }) => {
  return (
    <Container className="guitars">
      <Ul>
        {guitars.map((guitar, index) => (
          <li key={index}>
            <img src={guitar.url} style={{ width: "40px" }} alt="guitars" />
            <span>{guitar.name}</span>
            <span>{guitar.price}</span>
          </li>
        ))}
      </Ul>
    </Container>
  );
};

export default Guitars;
