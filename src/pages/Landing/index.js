import React from "react";
import {Content, Para, GuitarsImage} from "./styled.js";
import Guitars from "../../assets/images/guitars.jpg";

const Landing = () => {
  return (
    <Content className="landing">
      <h1>Shooping Cart</h1>
      <Para>
        Lorem IParasum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
        Lorem IParasum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Para>
      <GuitarsImage src={Guitars} />
    </Content>
  );
};

export default Landing;
