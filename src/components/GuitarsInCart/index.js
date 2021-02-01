import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Wrapper,
  Table,
  Tr,
  TableData,
  Img,
  TableDataModel,
  Info,
  TrashImg,
} from "./styled.js";
import Trash from "../../assets/images/trash.svg";

const GuitarsInCart = ({ guitars, handleRemoveGuitar }) => {
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
                <TableData>
                  <TrashImg
                    src={Trash}
                    alt="Trash"
                    onClick={() => handleRemoveGuitar(elem.id)}
                  />
                </TableData>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Wrapper>
      <Info>
        <p>Number of products: {guitars.length}</p>
        <p>Total Price: {totalPrice} $</p>
        <button>Purchase now</button>
        <Link to="/home">
          <button>Back to home</button>
        </Link>
      </Info>
    </Container>
  );
};

export default GuitarsInCart;
