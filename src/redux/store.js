import { createStore, combineReducers } from "redux";
import bookReducer from "./reducers/bookReducer";
import cartReducer from "./reducers/cartReducer";
import favouriteReducer from "./reducers/favouriteReducer";
import authorReducer from "./reducers/authorReducer";

const rootReducer = combineReducers({
  bookReducer: bookReducer,
  cartReducer: cartReducer,
  favouriteReducer: favouriteReducer,
  authorReducer: authorReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
