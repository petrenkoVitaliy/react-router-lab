import React from "react";
import ReactDOM from "react-dom";
import App1 from "./App1";
import App2 from "./App2";
import { Router, Route, browserHistory } from "react-router";

export const history = browserHistory;

ReactDOM.render(
  <Router history={history}>
    <Route path={"/"} component={App1} />
    <Route path={"/Speaker"} component={App2} />
  </Router>,
  document.getElementById("root")
);
