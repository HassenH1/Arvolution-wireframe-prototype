// import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ContextAPIProvider from "./context/ContextAPI";

describe("App Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <ContextAPIProvider>
          <App />
        </ContextAPIProvider>
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
}); //end of Describe
