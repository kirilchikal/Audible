import { ADD_BOOK, DELETE_BOOK } from "./types";

export const addBook = (book) => ({
  type: ADD_BOOK,
  data: book,
});

export const deleteBook = (key) => ({
  type: DELETE_BOOK,
  key: key,
});
