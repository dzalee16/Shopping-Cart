import React, { useEffect, useState } from "react";
import { firestore } from "../../services/fireConfig";
import { useParams, Link } from "react-router-dom";
import {
  CartItemContent,
  Image,
  Para,
  Button,
  BtnIncrement,
  BtnDecrement,
} from "./styled.js";

const CartItem = () => {
  const [guitar, setGuitar] = useState();
  const { slug } = useParams();

  useEffect(() => {
    const getSlug = async () => {
      try {
        const response = await firestore.collection("guitars").doc(slug).get();
        const data = response.data();
        setGuitar(data);
      } catch (err) {
        console.log("Error has occured.", err);
      }
    };
    getSlug();
  }, [slug]);

  const handleAddToCart = async () => {
    try {
      const response = firestore.collection("carts").doc().set(guitar);
      console.log("Sucefully added guitar to carts into firestore", response);
    } catch (err) {
      console.log("Error has occured", err);
    }
  };

  const handleQuantity = (e) => {
    if (e.target.id === "+") {
      setGuitar(() => {
        return {
          ...guitar,
          quantity: guitar.quantity + 1,
        };
      });
    } else if (e.target.id === "-") {
      if (guitar.quantity > 1) {
        setGuitar(() => {
          return {
            ...guitar,
            quantity: guitar.quantity - 1,
          };
        });
      }
    }
  };

  return (
    <CartItemContent>
      {guitar && (
        <>
          <Image src={guitar.url} alt="guitar" />
          <Para>Model: {guitar.name}</Para>
          <div className="btn-wrapper">
            <BtnIncrement id="+" onClick={handleQuantity}>
              +
            </BtnIncrement>
            <BtnDecrement id="-" onClick={handleQuantity}>
              -
            </BtnDecrement>
          </div>
          <Para>{guitar.quantity}</Para>
          <Para>Price: {guitar.price} $</Para>
          <Link to="/cart">
            <Button onClick={handleAddToCart}>Add to cart</Button>
          </Link>
          <Link to="/home">
            <Button>Back to Home</Button>
          </Link>
        </>
      )}
    </CartItemContent>
  );
};

export default CartItem;
