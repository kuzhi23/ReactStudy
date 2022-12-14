import { combineReducers } from "redux";
import counter from "./counter.jsx";
import sample, { sampleSaga } from "./sample.jsx";
import { all } from "redux-saga/effects";
import loading from "./loading.jsx";

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

export function* rootSaga() {
  yield all([sampleSaga()]);
}

export default rootReducer;
