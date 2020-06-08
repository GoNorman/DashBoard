import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/app";
import { createStore, applyMiddleware } from "redux";
import { list } from "./reducer/reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

const store = createStore(list, composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
