import { combineReducers } from "redux";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  Information: postReducer,
});

export default rootReducer;
