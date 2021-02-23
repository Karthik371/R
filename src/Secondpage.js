/** @format */

import React from "react";
import MensClothing from "./MensClothing";
import items from "./items";

const Secondpage = ({ products }) => {
  return (
    <div className="second-page">
      <div className="header">
        <h2> MensClothing </h2>
      </div>
      <div className="mens-clothing">
        {products.map((product) => (
          <MensClothing key={product.id} men2={product} />
        ))}
      </div>
    </div>
  );
};

export default Secondpage;
