import { addCart, subCart } from "./action";

export const addCartThunk = (item) => {
  return (dispatch, getState) => {
    const { cart } = getState();

    const updateCart = [...cart, item];

    dispatch(addCart(updateCart));
  };
};

export const subCartThunk = (item) => {
  // console.log("item", item);
  return (dispatch, getState) => {
    const { cart } = getState();

    const updateCart = cart.filter((products) => products.id !== item.id);

    dispatch(subCart(updateCart));
  };
};
