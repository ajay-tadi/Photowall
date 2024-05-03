import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from 'react-redux';
import { store } from "./Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));


store.subscribe(() => {
  console.log('current state', store.getState());
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
