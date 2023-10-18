import { combineReducers } from "redux";
import { FilterReducer } from "./filterReducer";
import { productReducer } from "./productReducer";

const rootReducer = combineReducers({
  product: productReducer,
  filter: FilterReducer,
});

export default rootReducer;
