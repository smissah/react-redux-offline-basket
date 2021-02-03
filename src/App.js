import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux";

//-- the reducer
import { reducer } from "./reducers/reducer";

//provider - wraps app; connect - used in components
import { Provider } from "react-redux";

//!Initial store / state
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 5,
};

const store = createStore(
  reducer,
  initialStore
  // +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  // cart setupgoes here

  return (
    <Provider store={store}>
      <main>
        <Navbar />
        <CartContainer cart={cartItems} />
      </main>
    </Provider>
  );
}

export default App;
