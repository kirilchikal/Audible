import { ADD_FAVOURITE, DELETE_FAVOURITE } from "../actions/types";

const initialState = {
  favouriteList: [],
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        ...state,
        favouriteList: [...state.favouriteList, action.key],
      };
    case DELETE_FAVOURITE:
      return {
        ...state,
        favouriteList: state.favouriteList.filter(
          (item) => item !== action.key
        ),
      };
    default:
      return state;
  }
};

export default favouriteReducer;
