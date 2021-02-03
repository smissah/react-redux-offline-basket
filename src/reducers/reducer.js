import { DECREASE, INCREASE } from "../actions";

export const reducer = (state, action) => {
  console.log({ state, action });
  switch (action.type) {
    case INCREASE:
      console.log("Increasing count");
      return { ...state, count: state.count + 1 };
    case DECREASE:
      console.log("Decreasing count");
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};
