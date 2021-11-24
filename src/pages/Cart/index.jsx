import { useSelector } from "react-redux";
import ShowProducts from "../../components/ShowProducts";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div>
      <ShowProducts list={cart} />
    </div>
  );
};

export default Cart;
