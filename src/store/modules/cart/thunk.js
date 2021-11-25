import { addCart, subCart } from "./action";

export const addCartThunk = (item) => {
  return (dispatch, getState) => {
    const { cart } = getState();

    const updateCart = [...cart, item];

    localStorage.setItem("@cart", JSON.stringify(updateCart));
    dispatch(addCart(updateCart));
  };
};

export const subCartThunk = (item) => {
  // console.log("item", item);
  return (dispatch, getState) => {
    const { cart } = getState();

    const updateCart = cart.filter((products) => products.id !== item.id);
    localStorage.setItem("@cart", JSON.stringify(updateCart));
    dispatch(subCart(updateCart));
  };
};
