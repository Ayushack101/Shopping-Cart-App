import React, { useReducer, useEffect } from "react";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import reducer from "./reducers/reducer";

const App = () => {
  const initialState = {
    loading: false,
    product: [],
    cart: [],
    total: 0,
    amount: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const url =
    "https://dummyjson.com/products?limit=12&select=title,price,thumbnail";
  const getData = async () => {
    dispatch({ type: "LOADING" });
    const resp = await fetch(url);
    const data = await resp.json();
    dispatch({ type: "DISPLAY_PRODUCTS", payload: data.products });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  if (state.loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Navbar state={state} />
      <main>
        <Product state={state} dispatch={dispatch} />
        <Cart state={state} dispatch={dispatch} />
      </main>
    </React.Fragment>
  );
};

export default App;
