import React, { useState, useEffect } from "react";
import { getData } from "../../services/firestore";
import Guitars from "../../components/Guitars";

const Home = () => {
  const [guitars, setGuitars] = useState([]);

  useEffect(() => {
    const getGuitars = async () => {
      const data = await getData;
      let arr = [];
      for (let doc of data.docs) {
        arr.push(doc.data());
      }
      setGuitars(arr);
    };
    try {
      getGuitars();
    } catch (err) {
      console.log("Error has occured!!!", err);
    }
  }, []);

  useEffect(() => {
    console.log(guitars);
  }, [guitars]);

  return (
    <div className="home">
      <h1>Home</h1>
      <Guitars guitars={guitars} />
    </div>
  );
};

export default Home;
