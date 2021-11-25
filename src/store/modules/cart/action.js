import { ADD_CART, SUB_CART } from "./actionTypes";

export const addCart = (updateCart) => ({
  type: ADD_CART,
  updateCart,
});

export const subCart = (updateCart) => ({
  type: SUB_CART,
  updateCart,
});
