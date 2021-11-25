import { Container } from "./styles";
import { FiLogOut, FiShoppingCart } from "react-icons/fi";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import Button from "../Button";

const Header = () => {
  const history = useHistory();
  const numberItems = useSelector((state) => state.cart);

  return (
    <Container>
      <h1>KenzieShop</h1>
      <div>
        <Button onClick={() => history.push("/cart")}>
          <FiShoppingCart />
          {numberItems.length > 0 && <span>{numberItems.length}</span>}
        </Button>
        <Button onClick={() => history.push("/")}>
          <FiLogOut />
        </Button>
      </div>
    </Container>
  );
};

export default Header;
