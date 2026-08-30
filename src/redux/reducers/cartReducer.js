import { DELETE_CART, ADD_CART, SET_CART } from "../actions/types";
import { incrementCartItem, decrementCartItem } from "../cartUtils";

const initialState = {
  cartList: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        cartList: incrementCartItem(state.cartList, action.key),
      };
    case DELETE_CART:
      return {
        ...state,
        cartList: decrementCartItem(state.cartList, action.key),
      };
    case SET_CART:
      return {
        ...state,
        cartList: action.items,
      };
    default:
      return state;
  }
};

export default cartReducer;
