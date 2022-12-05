import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import counter, { counterSaga } from "./counter.jsx";

const rootReducer = combineReducers({
  counter,
});

export function* rootSaga() {
  //all 함수는 여러 사가를 합쳐주는 역할을 합니다.
  yield all([counterSaga()]);
}

export default rootReducer;
