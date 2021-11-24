import { useEffect, useState } from "react";
import { Container } from "./styles";
import api from "../../services/api";
import Product from "../Product";

const ShowProducts = ({ list }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([...list]);
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
