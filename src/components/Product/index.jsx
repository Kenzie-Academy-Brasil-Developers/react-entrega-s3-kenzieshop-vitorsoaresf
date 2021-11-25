import { useDispatch } from "react-redux";
import { Container } from "./styles";
import { addCartThunk, subCartThunk } from "../../store/modules/cart/thunk";
import Button from "../Button";

const Product = ({ product, isCart }) => {
  const dispatch = useDispatch();

  const { title, description, image, price } = product;

  return (
    <Container>
      {isCart ? (
        <>
          <img src={image} alt="image-product" />
          <h1>{title}</h1>
          <p>{description}</p>
          <span>{price}</span>
          <Button onClick={() => dispatch(subCartThunk(product))}>
            Remover
          </Button>{" "}
        </>
      ) : (
        <>
          <img src={image} alt="image-product" />
          <h1>{title}</h1>
          <p>{description}</p>
          <span>R$ {price}</span>
          <Button onClick={() => dispatch(addCartThunk(product))}>
            Adicionar
          </Button>{" "}
        </>
      )}
    </Container>
  );
};

export default Product;
