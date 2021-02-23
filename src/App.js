/** @format */
import React, { useState, useEffect } from "react";
import Firstpage from "./Firstpage";
import { commerce } from "./lib/commerce";
import Secondpage from "./Secondpage";
require("dotenv").config();

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <div className="container">
      <Firstpage />
      <Secondpage products={products} />
    </div>
  );
}

export default App;
