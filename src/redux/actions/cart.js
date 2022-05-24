import { ADD_CART, DELETE_CART } from "./types";

export const addCart = (id) => ({
  type: ADD_CART,
  key: id,
});

export const deleteCart = (id) => ({
  type: DELETE_CART,
  key: id,
});
