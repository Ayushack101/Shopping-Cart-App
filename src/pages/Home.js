import React from "react";
import Nav from "../components/Nav";
import Product from "../components/Product";

const Home = ({ product, cart, productLoading, dispatch }) => {
  return (
    <main>
      <Nav dispatch={dispatch} />
      <Product
        product={product}
        cart={cart}
        productLoading={productLoading}
        dispatch={dispatch}
      />
    </main>
  );
};

export default Home;
