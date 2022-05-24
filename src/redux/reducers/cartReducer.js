import { DELETE_CART, ADD_CART } from "../actions/types";

const initialState = {
  cartList: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART: {
      return {
        ...state,
        cartList: [...state.cartList, action.key],
      };
    }
    case DELETE_CART:
      return {
        ...state,
        cartList: state.cartList.filter((item) => item !== action.key),
      };
    default:
      return state;
  }
};

export default cartReducer;
