import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./css/todo.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import userReducer from "./store/reducer/user";
import todoListReducer from "./store/reducer/todoList";

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoListReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
