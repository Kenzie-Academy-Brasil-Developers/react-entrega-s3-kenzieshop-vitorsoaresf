import { useSelector } from "react-redux";
import { Container, ContainerCart, ContainerProducts } from "./styles";
import Product from "../../components/Product";
import { useEffect, useState } from "react";
import Button from "../../components/Button";

const Cart = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("@cart")));
  console.log("aqui", cart);
  const cartUpdate = useSelector((state) => state.cart);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("@cart")));
  }, [cartUpdate]);

  return (
    <Container>
      <ContainerProducts>
        {cart &&
          cart.map((product, index) => (
            <Product isCart key={index} product={product} />
          ))}
      </ContainerProducts>
      <ContainerCart>
        <header>
          <p> Resumo do pedido</p>
        </header>
        <section>
          <div>
            <span>{cart.length} Produtos</span>
            <h2>
              R$
              {cart
                .reduce((acc, product) => (acc += product.price), 0)
                .toFixed(2)}
            </h2>
          </div>
          <Button>Finalizar Pedido</Button>
        </section>
      </ContainerCart>
    </Container>
  );
};

export default Cart;
