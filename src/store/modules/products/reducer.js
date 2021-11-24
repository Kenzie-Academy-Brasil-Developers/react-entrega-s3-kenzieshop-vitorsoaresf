import { GET_PRODUCTS } from "./actionTypes";

const productReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      console.log("reducer");
      return action.listProducts;
    default:
      return state;
  }
};

export default productReducer;
