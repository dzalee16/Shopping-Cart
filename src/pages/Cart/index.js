import React, { useEffect, useState } from "react";
import { CartContent } from "./styled.js";
import { firestore } from "../../services/fireConfig";
import GuitarsInCart from "../../components/GuitarsInCart";

const Cart = () => {
  const [guitars, setGuitars] = useState([]);

  useEffect(() => {
    const getCarts = async () => {
      try {
        const response = await firestore.collection("carts").get();
        const arrOfData = [];
        for (let doc of response.docs) {
          const data = doc.data();
          arrOfData.push(data);
        }
        setGuitars(arrOfData);
      } catch (err) {
        console.log("Error has occured.", err);
      }
    };
    getCarts();
  }, []);

  useEffect(() => {
    console.log(guitars);
  }, [guitars]);

  return (
    <CartContent>
      <h1>Cart</h1>
      <GuitarsInCart guitars={guitars} />
    </CartContent>
  );
};

export default Cart;
