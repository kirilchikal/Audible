import { createStore, combineReducers } from "redux";
import bookReducer from "./reducers/bookReducer";
import cartReducer from "./reducers/cartReducer";
import favouriteReducer from "./reducers/favouriteReducer";
import authorReducer from "./reducers/authorReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  bookReducer: bookReducer,
  cartReducer: cartReducer,
  favouriteReducer: favouriteReducer,
  authorReducer: authorReducer,
  userReducer: userReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
