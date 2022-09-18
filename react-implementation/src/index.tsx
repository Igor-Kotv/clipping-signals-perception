import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./Root";
import reportWebVitals from "./reportWebVitals";
import "./i18n";
import { Provider } from "react-redux";
import store from "./configureStore";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
