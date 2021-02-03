import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux";

//-- the reducer

const initialStore = {
  count: 0,
};

const reducer = (state, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "INCREASE":
      console.log("Increasing count");
      return { count: state.count + 1 };
    case "DECREASE":
      console.log("Decreasing count");
      return {
        count: state.count - 1,
      };

    case "RESET":
      return {
        count: 0,
      };

    default:
      return state;
  }
};
const store = createStore(
  reducer,
  initialStore
  // +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "RESET" });
console.log(store.getState());

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
