import { useSelector } from "react-redux";
import { Container } from "./styles";
import Product from "../../components/Product";
import { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("@cart")));
  console.log("aqui", cart);
  const cartUpdate = useSelector((state) => state.cart);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("@cart")));
  }, [cartUpdate]);

  return (
    <Container>
      {cart.map((product, index) => (
        <Product isCart key={index} product={product} />
      ))}
    </Container>
  );
};

export default Cart;
