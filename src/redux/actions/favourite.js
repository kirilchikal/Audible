import { ADD_FAVOURITE, DELETE_FAVOURITE } from "./types";

export const addFavourite = (id) => ({
  type: ADD_FAVOURITE,
  key: id,
});

export const deleteFavourite = (id) => ({
  type: DELETE_FAVOURITE,
  key: id,
});
