import React from "react";

const Nav = ({ dispatch }) => {
  const getData = async (category) => {
    dispatch({ type: "PRODUCT_LOADING" });
    if (category === "All") {
      const resp = await fetch(
        `https://dummyjson.com/products/?limit=40000000`
      );
      const data = await resp.json();
      dispatch({ type: "DISPLAY_PRODUCTS", payload: data.products });
      return;
    }
    const resp = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );
    const data = await resp.json();
    dispatch({ type: "DISPLAY_PRODUCTS", payload: data.products });
  };
  const handleClick = (category) => {
    getData(category);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav-bg-color">
        <div className="container-fluid container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link  mx-2"
                  aria-current="page"
                  href="#"
                  onClick={() => {
                    handleClick("All");
                  }}
                >
                  All
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  mx-2"
                  aria-current="page"
                  href="#"
                  onClick={() => {
                    handleClick("smartphones");
                  }}
                >
                  Smartphones
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  mx-2"
                  aria-current="page"
                  href="#"
                  onClick={() => {
                    handleClick("laptops");
                  }}
                >
                  Laptops
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  mx-2"
                  aria-current="page"
                  href="#"
                  onClick={() => {
                    handleClick("fragrances");
                  }}
                >
                  Fragrances
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  mx-2"
                  aria-current="page"
                  href="#"
                  onClick={() => {
                    handleClick("groceries");
                  }}
                >
                  Groceries
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  mx-2"
                  aria-current="page"
                  href="#"
                  onClick={() => {
                    handleClick("furniture");
                  }}
                >
                  Furniture
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  mx-2"
                  aria-current="page"
                  href="#"
                  onClick={() => {
                    handleClick("mens-watches");
                  }}
                >
                  Watches
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  mx-2"
                  aria-current="page"
                  href="#"
                  onClick={() => {
                    handleClick("motorcycle");
                  }}
                >
                  Motorcycle
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  mx-2"
                  aria-current="page"
                  href="#"
                  onClick={() => {
                    handleClick("sunglasses");
                  }}
                >
                  Sunglasses
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
