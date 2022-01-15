import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

// TODO: add redux logger middleware for dev mode

export const store = createStore(reducers, {}, applyMiddleware(thunk));
