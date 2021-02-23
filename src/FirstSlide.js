/** @format */

import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
const FirstSlide = () => {
  return (
    <div className="first-page">
      <div className="brand">
        <h2>Shopify</h2>
        <div className="profile-cart">
          <ul>
            <li>
              <FaShoppingCart />
            </li>
            <li>
              <CgProfile />
            </li>
          </ul>
        </div>
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
          <img src="./images/Layer 1.png" alt="Image1" />

          <div className="offer">
            <h2>20% DISCOUNT</h2>
            <p>Limited period offer</p>
            <button type="text"> EXPLORE </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSlide;
