import { useSelector } from "react-redux";
import { Container } from "./styles";
import Product from "../../components/Product";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <Container>
      {cart.map((product, index) => (
        <Product isCart key={index} product={product} />
      ))}
    </Container>
  );
};

export default Cart;
