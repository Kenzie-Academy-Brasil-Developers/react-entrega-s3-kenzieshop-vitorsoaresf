import { Container } from "./styles";
import { FiLogOut, FiShoppingCart } from "react-icons/fi";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import Button from "../Button";
import { useEffect, useState } from "react";

const Header = () => {
  const history = useHistory();
  const [numberItems, setNumberItems] = useState([]);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    setNumberItems(JSON.parse(localStorage.getItem("@cart")));
  }, [cart]);

  return (
    <Container>
      <h1>KenzieShop</h1>
      <div>
        <Button onClick={() => history.push("/cart")}>
          <FiShoppingCart />
          {numberItems && <span>{numberItems.length}</span>}
        </Button>
        <Button onClick={() => history.push("/")}>
          <FiLogOut />
        </Button>
      </div>
    </Container>
  );
};

export default Header;
