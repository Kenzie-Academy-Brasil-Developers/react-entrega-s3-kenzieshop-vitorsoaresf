import { useEffect, useState } from "react";
import { Container } from "./styles";
import api from "../../services/api";
import Product from "../Product";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((response) => setProducts(response.data));
  }, []);

  return (
    <Container>
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </Container>
  );
};

export default ShowProducts;
