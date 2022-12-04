import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./modules/index.jsx";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";

const store = createStore(
  rootReducer,
  applyMiddleware(createLogger(), ReduxThunk)
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
