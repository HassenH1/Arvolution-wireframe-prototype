// import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import ContextAPIProvider from "../context/ContextAPI";

describe("Home Component Test", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ContextAPIProvider>
        <Router>
          <Home />
        </Router>
      </ContextAPIProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
