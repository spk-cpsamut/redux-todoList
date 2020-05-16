import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./css/todo.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { loadState, saveState } from "./store/storeService";
import userReducer from "./store/reducer/user";
import todoListReducer from "./store/reducer/todoList";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoListReducer,
});

const logger1 = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware]1 dispatching", action);
      next(action);
      console.log("1---->", store.getState());
    };
  };
};

const logger2 = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware]2 dispatching", action);
      next(action);
      console.log("2---->", store.getState());
    };
  };
};

const persisState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  persisState,
  composeEnhancers(applyMiddleware(logger1, thunk))
);

store.subscribe(() => {
  saveState(store.getState());
});

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
