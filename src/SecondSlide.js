/** @format */

import React from "react";

const SecondSlide = () => {
  return (
    <div className="first-page " style={{ backgroundColor: "white" }}>
      <div className="second-slide">
        <div className="brand" style={{ backgroundColor: "#FCF3FF" }}>
          <h2>Shopify</h2>
        </div>
        <div className="nav-bar">
          <ul>
            <li>Home</li>
            <li>Clothing</li>
            <li>Watches</li>
            <li>Products</li>
          </ul>
        </div>
        <div className="image-slider">
          <div className="shoe1">
            <img src="./images/shoe2.svg" alt="Image1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSlide;
