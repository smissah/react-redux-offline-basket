import { DECREASE, INCREASE, CLEAR_CART, REMOVE_ITEM } from "../actions";

export const reducer = (state, action) => {
  console.log("clearing items");
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };

    case INCREASE:
      let tempCart = state.cart.map((singleCartItem, index) => {
        if (singleCartItem.id === action.payload.itemID) {
          singleCartItem = {
            ...singleCartItem,
            amount: singleCartItem.amount + 1,
          };
        }
        return singleCartItem;
      });
      return { ...state, cart: tempCart };
    //--------------
    case DECREASE:
      let tempDecCart = [];
      if (action.payload.itemAmount === 1) {
        console.log(`You've only got one item, bro`);
      } else {
        tempDecCart = state.cart.map((cartItem) => {
          console.log(cartItem.amount);
          if (cartItem.id === action.payload.itemId) {
            cartItem = {
              ...cartItem,
              amount: cartItem.amount - 1,
            };
            return cartItem;
          }
        });
      }

      return { ...state, cart: tempDecCart };
    //-------------
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
