import { GET_PRODUCTS } from "./actionTypes";

export const getProducts = (listProducts) => {
  console.log("asd");

  return { type: GET_PRODUCTS, listProducts };
};
