import React from "react";
import {
  Container,
  Table,
  Tr,
  TableData,
  Img,
  TableDataModel,
} from "./styled.js";

const GuitarsInCart = ({ guitars }) => {
  return (
    <Container>
      <Table>
        <tbody>
          <Tr>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </Tr>
          {guitars.map((guitar, index) => (
            <Tr key={index}>
              <TableDataModel>
                <Img src={guitar.url} alt="guitar" />
                <span>{guitar.name}</span>
              </TableDataModel>
              <TableData>{guitar.price} $</TableData>
              <TableData>{guitar.quantity}</TableData>
              <TableData>{guitar.quantity * guitar.price} $</TableData>
              <TableData></TableData>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default GuitarsInCart;
