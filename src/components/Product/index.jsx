import { Container } from "./styles";
import Button from "../Button";

const Product = ({ product }) => {
  const { title, description, image, price } = product;
  return (
    <Container>
      <img src={image} alt="image-product" />
      <h1>{title}</h1>
      <p>{description}</p>
      <span>{price}</span>
      <Button>Adiconar</Button>
    </Container>
  );
};

export default Product;
