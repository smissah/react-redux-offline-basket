import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE_ITEM,
  GET_TOTAL,
} from "../actions";

export const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === INCREASE) {
    let tempCart = state.cart.map((singleCartItem, index) => {
      if (singleCartItem.id === action.payload.id) {
        singleCartItem = {
          ...singleCartItem,
          amount: singleCartItem.amount + 1,
        };
      }
      return singleCartItem;
    });
    return {
      ...state,
      cart: tempCart,
    };
  }

  if (action.type === DECREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = {
          ...cartItem,
          amount: cartItem.amount - 1,
        };
      }
      return cartItem;
    });

    return {
      ...state,
      cart: tempCart,
    };
  }

  if (action.type === REMOVE_ITEM) {
    const itemId = action.payload.id;

    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== itemId),
    };
  }

  if (action.type === GET_TOTAL) {
    console.log("getting total");
    //below: destructure the objects that will be returned
    let { total, amount } = state.cart.reduce(
      (cartTotal, currentCart) => {
        // console.log(currentCart);
        const { price, amount } = currentCart;
        cartTotal.amount += amount;
        cartTotal.total += price * amount;
        //! Total/Accumulator  must always be returned!!!
        return cartTotal; //!< this cart total represents the below online
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  return state;
};

export default reducer;
