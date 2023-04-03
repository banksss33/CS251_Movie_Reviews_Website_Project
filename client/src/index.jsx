import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SingleImage from "./Page/Test1";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const root = document.getElementById("root");

// required parameter to fetch images

ReactDOM.render(
  <React.StrictMode>
    <SingleImage/>
  </React.StrictMode>,
  root
);

reportWebVitals();
