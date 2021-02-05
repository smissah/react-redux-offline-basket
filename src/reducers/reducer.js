import { DECREASE, INCREASE, CLEAR_CART, REMOVE_ITEM } from "../actions";

export const reducer = (state, action) => {
  console.log("clearing items");
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };

    case INCREASE:
      let tempCart = state.cart.map((singleCartItem, index) => {
        console.log(singleCartItem);
        if (singleCartItem.id === action.payload.itemID) {
          singleCartItem = {
            ...singleCartItem,
            amount: singleCartItem.amount + 1,
          };
        }
        return singleCartItem;
      });
      return { ...state, cart: tempCart };

      return state;

    case DECREASE:
      console.log("decreasing items");
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
