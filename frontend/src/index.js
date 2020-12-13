import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.scss";
import Accounts from "./pages/accounts";
import NavBar from "./components/navBar";
import Login from "./pages/login";

function RouteControl() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  let route;
  if (JSON.parse(isLoggedIn)) {
    route = (
      <Switch>
        <Route path="/accounts">
          <Accounts />
        </Route>
        <Route path="/signout">
          <Login />
        </Route>
      </Switch>
    );
  } else {
    route = (
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signout">
          <Login />
        </Route>
      </Switch>
    );
  }

  return <div>{route}</div>;
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <RouteControl />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
