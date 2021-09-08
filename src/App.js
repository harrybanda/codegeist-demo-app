import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";

require("dotenv").config();

export default function App() {
  return (
    <Router>
      <Switch>
        <Route component={HomePage} path="/home" />
        <Route component={LoginPage} path="/" />
      </Switch>
    </Router>
  );
}
