import { ADD_CART } from "./actionTypes";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CART:
      return action.updateCart;
    default:
      return state;
  }
};

export default cartReducer;
