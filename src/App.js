import React, { useEffect, useReducer } from "react";
import reducer from "./reducers/reducer";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Nav from "./components/Nav";

const App = () => {
  const initialState = {
    loading: false,
    productLoading: false,
    product: [],
    cart: [],
    total: 0,
    amount: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const url =
    "https://dummyjson.com/products?limit=12&select=title,price,thumbnail";

  const getproducts = async () => {
    dispatch({ type: "LOADING" });
    const resp = await fetch(url);
    const data = await resp.json();
    dispatch({ type: "DISPLAY_PRODUCTS", payload: data.products });
  };

  useEffect(() => {
    getproducts();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  if (state.loading) {
    return (
      <div className="loading">
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <main>
      <Navbar amount={state.amount} />
      <Nav dispatch={dispatch} />
      <Product
        product={state.product}
        cart={state.cart}
        productLoading={state.productLoading}
        dispatch={dispatch}
      />
      <Cart cart={state.cart} total={state.total} dispatch={dispatch} />
    </main>
  );
};

export default App;
