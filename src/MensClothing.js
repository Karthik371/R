/** @format */

import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Typography from "./Typography";
const MensClothing = ({ men2 }) => {
  return (
    <div className="mens-images">
      <img src={men2.media.source} alt="" />
      <a className="anchor" href="/">
        <FaShoppingCart />
      </a>
      <div className="mens-contents">
        <h3>{men2.name}</h3>
        <p className="description">
          <div
            className="danger-description"
            dangerouslySetInnerHTML={{
              __html: `${men2.description}`,
            }}></div>
        </p>
      </div>
    </div>
  );
};

export default MensClothing;
