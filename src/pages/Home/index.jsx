import { useEffect, useState } from "react";
import ShowProducts from "../../components/ShowProducts";
import api from "../../services/api";

const Home = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get("/products").then((response) => setList(response.data));
  }, []);

  return <div>{list.length > 0 && <ShowProducts list={list} />}</div>;
};

export default Home;
