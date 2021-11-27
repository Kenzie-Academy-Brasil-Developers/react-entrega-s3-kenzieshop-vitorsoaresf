import { GET_PRODUCTS } from "./actionTypes";

export const getProducts = (listProducts) => {
  // console.log("asd", listProducts);

  return { type: GET_PRODUCTS, listProducts };
};
