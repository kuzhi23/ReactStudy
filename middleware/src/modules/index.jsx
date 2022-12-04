import { combineReducers } from "redux";
import counter from "./counter.jsx";
import sample from "./sample.jsx";
import loading from "./loading.jsx";

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

export default rootReducer;
