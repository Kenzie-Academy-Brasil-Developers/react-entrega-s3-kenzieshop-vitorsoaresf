import { useEffect, useState } from "react";
import { Container } from "./styles";
import Product from "../Product";
import { useSelector } from "react-redux";

const ShowProducts = () => {
  const products = useSelector((state) => state.products);

  return (
    <Container>
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </Container>
  );
};

export default ShowProducts;
