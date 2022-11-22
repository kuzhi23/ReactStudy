import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./modules/index.jsx";
import { Provider } from "react-redux";
import { logger } from "redux-logger/src";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, logger))
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
