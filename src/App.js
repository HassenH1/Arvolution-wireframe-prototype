import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Game from "./pages/Game";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Game} exact path="/game" />
      </Switch>
    </>
  );
}

export default App;

{
  /* <Route exact path="*" component={GenericNotFound} /> TODO: Build this component out  */
}
