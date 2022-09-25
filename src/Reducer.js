const reducer = (state, action) => {
  if (action.type === "EMPTY CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "REMOVE") {
    // console.log(state);
    const tempState = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempState };
  }

  if (action.type === "INCREASE") {
    // console.log("click");
    // console.log(state, action.payload);

    return {
      ...state,
      cart: state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      }),
    };

    // return { ...state, cart: tempState };
  }

  if (action.type === "DECREASE") {
    return {
      ...state,
      cart: state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0),
    };
  }

  if (action.type === "TOTAL__AMOUNT") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
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

  if (action.type === "DISPLAY__ITEMS") {
    return { ...state, loading: false, cart: action.payload };
  }

  return state;
};

export { reducer };
