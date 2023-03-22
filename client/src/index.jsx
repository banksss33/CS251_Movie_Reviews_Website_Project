import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CarouselData from "./component/ShowCarousel";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "./component/MovieCard";
import ShowAccount from "./component/ShowAccount";
import ShowCarousel from "./component/ShowCarousel";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

reportWebVitals();
