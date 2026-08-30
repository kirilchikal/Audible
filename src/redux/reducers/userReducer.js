import { SET_USER, LOGOUT } from "../actions/types";

const initialState = {
  username: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, username: action.username };
    case LOGOUT:
      return { ...state, username: null };
    default:
      return state;
  }
};

export default userReducer;
