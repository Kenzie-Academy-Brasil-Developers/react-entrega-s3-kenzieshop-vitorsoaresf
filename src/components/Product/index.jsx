import { useDispatch } from "react-redux";
import { Container } from "./styles";
import { addCartThunk } from "../../store/modules/cart/thunk";
import Button from "../Button";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const { title, description, image, price } = product;
  return (
    <Container>
      <img src={image} alt="image-product" />
      <h1>{title}</h1>
      <p>{description}</p>
      <span>{price}</span>
      <Button onClick={() => dispatch(addCartThunk(product))}>Adiconar</Button>
    </Container>
  );
};

export default Product;
