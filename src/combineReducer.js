import changeNumber from "./reducer.js";
import { combineReducer } from "redux";

const rootReducer = combineReducer({
  changeNumber
});

export default rootReducer;
