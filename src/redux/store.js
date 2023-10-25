import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducer/rootReducer";
import { middleWare } from "./middlewares";



export const store = createStore(rootReducer, composeWithDevTools(middleWare));
