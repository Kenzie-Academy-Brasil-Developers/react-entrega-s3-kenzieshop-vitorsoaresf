import { getProducts } from "./action";
import api from "../../../services/api";

export const getProductsThunk = () => {
  return (dispatch, getState) => {
    const { products } = getState();

    api
      .get("/products")
      .then((response) => dispatch(getProducts(response.data)))
      .catch((err) => console.log(err));
  };
};
