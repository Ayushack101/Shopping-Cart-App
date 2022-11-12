const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "DISPLAY_PRODUCTS") {
    return { ...state, product: action.payload, loading: false };
  }
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      cart: [
        ...state.cart,
        // {
        //   id: action.payload.id,
        //   thumbnail: action.payload.thumbnail,
        //   price: action.payload.price,
        //   title: action.payload.title,
        //   qty: 1
        // },
        {
          ...action.payload,
          qty: 1,
        },
      ],
    };
  }
  if (action.type === "REMOVE_FROM_CART") {
    const newcart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: newcart,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "DECREASE") {
    let tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, qty: item.qty - 1 };
        }
        return item;
      })
      .filter((item) => item.qty !== 0);
    return { ...state, cart: tempCart };
  }
  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
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
    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }
};

export default reducer;
