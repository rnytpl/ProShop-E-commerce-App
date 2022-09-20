import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { Provider } from "react-redux";
import { persistor } from "./store";
import { PersistGate } from 'redux-persist/integration/react'
import { store } from "./store";
import "./index.css";
import "./bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />

    </PersistGate>
  </Provider>
);
