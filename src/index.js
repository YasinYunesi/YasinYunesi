import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// fonts and icons
import "@fortawesome/fontawesome-free/css/all.css";
import "@mdi/font/css/materialdesignicons.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
