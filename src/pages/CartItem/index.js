import React, { useEffect, useState } from "react";
import { firestore } from "../../services/fireConfig";
import { useParams, Link } from "react-router-dom";
import { CartItemContent, Image, Para, Button } from "./styled.js";

const CartItem = () => {
  const [guitar, setGuitar] = useState();
  const { slug } = useParams();

  useEffect(() => {
    firestore
      .collection("guitars")
      .doc(slug)
      .get()
      .then((snapShot) => {
        console.log(snapShot.data());
        const data = snapShot.data();
        setGuitar(data);
      })
      .catch((err) => {
        console.log("Error has occured", err);
      });
  }, [slug]);

  return (
    <CartItemContent>
      <h1>CartItem</h1>
      {guitar && (
        <>
          <Image src={guitar.url} alt="guitar" />
          <Para>Model: {guitar.name}</Para>
          <Para>Price: {guitar.price} $</Para>
          <Button>Add to cart</Button>
          <Link to="/home">
            <Button>Back to Home</Button>
          </Link>
        </>
      )}
    </CartItemContent>
  );
};

export default CartItem;
