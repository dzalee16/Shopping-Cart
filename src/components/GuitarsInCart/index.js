import React from "react";
import {
  Container,
  Wrapper,
  Table,
  Tr,
  TableData,
  Img,
  TableDataModel,
  Info,
} from "./styled.js";

const GuitarsInCart = ({ guitars }) => {
  const handleSumTotalPrice = () => {
    let sum = 0;
    guitars.forEach((elem) => {
      sum += elem.guitar.quantity * elem.guitar.price;
    });
    return sum;
  };
  let totalPrice = handleSumTotalPrice();

  return (
    <Container>
      <Wrapper>
        <Table>
          <thead>
            <Tr>
              <th>Model</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </Tr>
          </thead>
          <tbody>
            {guitars.map((elem, index) => (
              <Tr key={index}>
                <TableDataModel>
                  <Img src={elem.guitar.url} alt="guitar" />
                  <span>{elem.guitar.name}</span>
                </TableDataModel>
                <TableData>{elem.guitar.price} $</TableData>
                <TableData>{elem.guitar.quantity}</TableData>
                <TableData>
                  {elem.guitar.quantity * elem.guitar.price} $
                </TableData>
                <TableData></TableData>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Wrapper>
      <Info>
        <p>Number of products: {guitars.length}</p>
        <p>Total Price: {totalPrice} $</p>
        <button>Purchase now</button>
      </Info>
    </Container>
  );
};

export default GuitarsInCart;
