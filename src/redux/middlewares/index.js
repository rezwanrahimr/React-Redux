import { applyMiddleware } from "redux";
import ProductCart from "./productCart";
import thunk from "redux-thunk";
export const middleWare = applyMiddleware(ProductCart,thunk);