import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bulma/css/bulma.min.css";
import { BugTrap } from "react-bug-trap";

ReactDOM.render(
  <BugTrap webhook={process.env.REACT_APP_FORGE_WEBHOOK}>
    <App />
  </BugTrap>,
  document.getElementById("root")
);
