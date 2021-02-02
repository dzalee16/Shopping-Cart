import React, { useEffect, useState } from "react";
import { CartContent } from "./styled.js";
import { firestore, auth } from "../../services/fireConfig";
import GuitarsInCart from "../../components/GuitarsInCart";

const Cart = () => {
  const [guitars, setGuitars] = useState([]);

  useEffect(() => {
    const getCarts = async () => {
      try {
        const response = await firestore
          .collection("carts")
          .where("userId", "==", auth.currentUser.uid)
          .get();
        const arrOfData = [];
        for (let doc of response.docs) {
          const data = doc.data();
          const id = doc.id;
          data.id = id;
          arrOfData.push(data);
        }
        setGuitars(arrOfData);
      } catch (err) {
        console.log("Error has occured.", err);
      }
    };
    getCarts();
  }, []);

  const handleRemoveGuitar = (id) => {
    let newGuitars = [...guitars];
    newGuitars = newGuitars.filter((guitar) => {
      if (id !== guitar.id) {
        return newGuitars;
      } else {
        firestore
          .collection("carts")
          .doc(guitar.id)
          .delete()
          .then(() => console.log("Succefully deleted guitar from cart"))
          .catch((err) => console.log("Error has occured", err));
      }
    });
    setGuitars(newGuitars);
  };

  return (
    <CartContent>
      <GuitarsInCart
        guitars={guitars}
        handleRemoveGuitar={handleRemoveGuitar}
      />
    </CartContent>
  );
};

export default Cart;
