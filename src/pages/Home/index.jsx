import { useEffect } from "react";
import { Container } from "./styles";
import ShowProducts from "../../components/ShowProducts";
import { useSelector, useDispatch } from "react-redux";
import { getProductsThunk } from "../../store/modules/products/thunk";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);
  const list = useSelector((state) => state.products);

  return (
    <Container>{list.length > 0 && <ShowProducts list={list} />}</Container>
  );
};

export default Home;
