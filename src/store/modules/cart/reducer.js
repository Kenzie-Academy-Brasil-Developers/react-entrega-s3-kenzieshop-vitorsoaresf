import { ADD_CART, SUB_CART } from "./actionTypes";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CART:
      return action.updateCart;
    case SUB_CART:
      return action.updateCart;
    default:
      return state;
  }
};

export default cartReducer;
