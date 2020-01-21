import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import App from "./App";
import { startSetCustomers } from "./action/customers";
import { startGetUser } from "./action/users";

const store = configureStore();

console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});

if (localStorage.getItem("authToken")) {
  store.dispatch(startSetCustomers());
  store.dispatch(startGetUser());
}

const ele = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(ele, document.getElementById("root"));
