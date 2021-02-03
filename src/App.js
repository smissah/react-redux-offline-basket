import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux";
//ACTIONS
import { DECREASE, INCREASE } from "./actions";
//-- the reducer
import { reducer } from "./reducers/reducer";
const initialStore = {
  count: 0,
  name: "stephen",
  age: 26,
};

const store = createStore(
  reducer,
  initialStore
  // +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({ type: INCREASE });
store.dispatch({ type: DECREASE });

console.log(store.getState());

function App() {
  // cart setupgoes here

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
