import { ADD_CART, SUB_CART } from "./actionTypes";
const defaultState = JSON.parse(localStorage.getItem("@cart")) || [];

const cartReducer = (state = defaultState, action) => {
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
