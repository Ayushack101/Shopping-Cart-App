import React from "react";

const Product = ({ product, dispatch, cart, productLoading }) => {
  if (productLoading) {
    return (
      <div className="loading">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <section className="product-section">
      <div className="product-title">
        <h2>Products</h2>
      </div>
      <div className="products-center">
        {product.map((item) => {
          const { id, title, price, thumbnail } = item;
          return (
            <div className="product" key={id}>
              <div className="img">
                <img src={thumbnail} alt={title} />
              </div>
              <div className="product-footer">
                <div className="product-footer-details">
                  <span>
                    {title.length < 17 ? title : `${title.substring(0, 16)}...`}
                  </span>
                  <b>$ {price}</b>
                </div>
                {cart.some((item) => item.id === id) ? (
                  <div className="product-btn">
                    <button
                      className="btn"
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: id,
                        });
                      }}
                    >
                      Remove from cart
                    </button>
                  </div>
                ) : (
                  <div className="product-btn">
                    <button
                      className="btn"
                      onClick={() => {
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: { id, title, thumbnail, price },
                        });
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Product;
