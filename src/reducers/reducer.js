import { DECREASE, INCREASE, CLEAR_CART, REMOVE_ITEM } from "../actions";

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
    // console.log(action);

    let tempCart = [];
    if (action.payload.amount === 1) {
      console.log(`You've only got one item, bro`);
      tempCart = state.cart.filter((cartItem) => {
        return cartItem.id !== action.payload.id;
      });
    } else {
      tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = {
            ...cartItem,
            amount: cartItem.amount - 1,
          };
        }
        return cartItem;
      });
      console.log(`new temp cart is ${tempCart}`);
    }

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
  return state;
};

export default reducer;
