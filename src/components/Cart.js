import React from "react";

const Cart = ({ cart, dispatch, total }) => {
  if (cart.length === 0) {
    return (
      <section className="cart">
        <div className="cart-title">
          <h2>Your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </div>
        {/* cart footer */}
        <div className="cart-footer">
          <hr />
          <div className="cart-total">
            <h4>
              total <span>$ {total}</span>
            </h4>
          </div>
          <button
            className="btn clear-btn"
            onClick={() => {
              dispatch({ type: "CLEAR_CART" });
            }}
          >
            clear cart
          </button>
        </div>
      </section>
    );
  }
  return (
    <section className="cart">
      <div className="cart-title">
        <h2>your Bag</h2>
      </div>
      <div className="carts-center">
        {/* cart items */}
        {cart.map((item) => {
          const { id, title, price, thumbnail, qty } = item;
          return (
            <div className="cart-item" key={id}>
              <div className="item-details">
                <div className="item-img">
                  <img src={thumbnail} alt={title} />
                </div>
                <div className="details">
                  <div className="item-title">
                    <h4>{title}</h4>
                  </div>
                  <div className="item-price">$ {price}</div>
                  <button
                    className="remove-btn"
                    onClick={() => {
                      dispatch({ type: "REMOVE_FROM_CART", payload: id });
                    }}
                  >
                    remove
                  </button>
                </div>
              </div>
              <div className="btns">
                {/* increase amount */}
                <button
                  className="amount-btn"
                  onClick={() => {
                    dispatch({ type: "INCREASE", payload: id });
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
                  </svg>
                </button>
                {/* quantity */}
                <p className="amount">{qty}</p>
                {/* decrease amount */}
                <button
                  className="amount-btn"
                  onClick={() => {
                    dispatch({ type: "DECREASE", payload: id });
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {/* cart footer */}
      <div className="cart-footer">
        <hr />
        <div className="cart-total">
          <h4>
            total <span>$ {total}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch({ type: "CLEAR_CART" });
          }}
        >
          clear cart
        </button>
      </div>
    </section>
  );
};

export default Cart;
