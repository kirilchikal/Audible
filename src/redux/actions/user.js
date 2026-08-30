import { SET_USER, LOGOUT } from "./types";

export const setUser = (username) => ({
  type: SET_USER,
  username,
});

export const logout = () => ({
  type: LOGOUT,
});
