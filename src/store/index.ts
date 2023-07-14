import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { clientReducer } from "./clientReducer";

export const store = createStore(clientReducer, applyMiddleware(thunk));
