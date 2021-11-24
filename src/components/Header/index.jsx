import { Container } from "./styles";
import { FiLogOut, FiShoppingCart } from "react-icons/fi";
import { useHistory } from "react-router";

import Button from "../Button";

const Header = () => {
  const history = useHistory();

  return (
    <Container>
      <h1>KenzieShop</h1>
      <div>
        <Button onClick={() => history.push("/cart")}>
          <FiShoppingCart />
        </Button>
        <Button>
          <FiLogOut />
        </Button>
      </div>
    </Container>
  );
};

export default Header;
