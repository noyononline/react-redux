import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";

const store = createStore(
  rootReducer,
  composeWithDevTools()
  // applyMiddleware()
);

export default store;
