import { getProducts } from "./action";
import { useState } from "react";
import api from "../../../services/api";

export const getProductsThunk = () => {
  //   const [request, setRequest] = useState([]);
  // console.log("ahahah");
  return (dispatch, getState) => {
    const { products } = getState();

    const listProducts = api
      .get("/products")
      .then((response) => response.data)
      .catch((err) => console.log(err));

    dispatch(getProducts(listProducts));
  };
};
