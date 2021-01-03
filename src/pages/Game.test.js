// import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import Game from "./Game";
import ContextAPIProvider from "../context/ContextAPI";

describe("Game Page test Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ContextAPIProvider>
        <Router>
          <Game />
        </Router>
      </ContextAPIProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
