import { DECREASE, INCREASE, CLEAR_CART, REMOVE_ITEM } from "../actions";

export const reducer = (state, action) => {
  console.log("clearing items");
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };

    case INCREASE:
      console.log("increasing items");
      return state;

    case DECREASE:
      console.log("decreasomg items");
      return state;

    case REMOVE_ITEM: {
      // console.log(action);
      const itemId = action.payload.itemID;

      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== itemId),
      };
    }
    default:
      return state;
  }
};
