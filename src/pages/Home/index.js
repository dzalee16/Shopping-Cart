import React, { useState, useEffect } from "react";
import { getData } from "../../services/firestore";
import { HomeContent, Search } from "./styled.js";
import Guitars from "../../components/Guitars";

const Home = () => {
  const [guitars, setGuitars] = useState([]);
  const [searchGuitars, setSearchGuitars] = useState([]);

  const handleSearchByName = (e) => {
    let newGuitars = [];
    guitars.filter((guitar) => {
      if (guitar.name.toLowerCase().includes(e.target.value)) {
        newGuitars.push(guitar);
      }
      return newGuitars;
    });
    setSearchGuitars(newGuitars);
  };

  useEffect(() => {
    const getGuitars = async () => {
      const data = await getData;
      let arrOfData = [];
      for (let doc of data.docs) {
        const data = doc.data();
        const id = doc.id;
        data.id = id;
        arrOfData.push(data);
      }
      setGuitars(arrOfData);
    };
    try {
      getGuitars();
    } catch (err) {
      console.log("Error has occured!!!", err);
    }
  }, []);

  return (
    <HomeContent className="home">
      <Search
        type="search"
        placeholder="Search by name"
        onChange={handleSearchByName}
      />
      {searchGuitars.length !== 0 ? (
        <Guitars guitars={searchGuitars} />
      ) : (
        <Guitars guitars={guitars} />
      )}
    </HomeContent>
  );
};

export default Home;
