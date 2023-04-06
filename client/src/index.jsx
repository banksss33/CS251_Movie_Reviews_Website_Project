import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Assitance from "./component/componentFile/Assitance";
import { useState } from "react";
import Test1 from "./component/componentFile/Test1";

const root = document.getElementById("root");
// required parameter to fetch images

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

reportWebVitals();
