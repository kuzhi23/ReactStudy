import { combineReducers } from "redux";
import counter from "./counter.jsx";
import todos from "./todos.jsx";

const rootReducer = combineReducers({ counter, todos });

export default rootReducer;
