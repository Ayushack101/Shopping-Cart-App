const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === "PRODUCT_LOADING") {
    return {
      ...state,
      productLoading: true,
    };
  }
  if (action.type === "DISPLAY_PRODUCTS") {
    return {
      ...state,
      product: action.payload,
      loading: false,
      productLoading: false,
    };
  }
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      cart: [...state.cart, { ...action.payload, qty: 1 }],
    };
  }
  if (action.type === "REMOVE_FROM_CART") {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: newCart,
    };
  }
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "INCREASE") {
    let newCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });
    return {
      ...state,
      cart: newCart,
    };
  }
  if (action.type === "DECREASE") {
    let newCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, qty: item.qty - 1 };
        }
        return item;
      })
      .filter((item) => item.qty !== 0);
    return {
      ...state,
      cart: newCart,
    };
  }
  if (action.type === "GET_TOTALS") {
    const { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, qty } = cartItem;
        const itemTotal = price * qty;

        cartTotal.total += itemTotal;
        cartTotal.amount += qty;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    return {
      ...state,
      total,
      amount,
    };
  }
};

export default reducer;
