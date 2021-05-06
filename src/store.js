import { createStore } from "redux";

import rootReducer from "./combineReducer.js";

const store = createStore(rootReducer);

export default store;
