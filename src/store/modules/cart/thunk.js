import { addCart } from "./action";

export const addCartThunk = (item) => {
  return (dispatch, getState) => {
    const { cart } = getState();

    const updateCart = [...cart, item];

    dispatch(addCart(updateCart));
  };
};
