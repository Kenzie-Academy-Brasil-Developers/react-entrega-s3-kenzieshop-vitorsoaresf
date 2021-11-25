import { useEffect, useState } from "react";
import { Container } from "./styles";
import ShowProducts from "../../components/ShowProducts";
import api from "../../services/api";

const Home = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get("/products").then((response) => setList(response.data));
  }, []);

  return (
    <Container>{list.length > 0 && <ShowProducts list={list} />}</Container>
  );
};

export default Home;
