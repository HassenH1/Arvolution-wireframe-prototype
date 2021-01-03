import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import ContextAPIProvider from "../context/ContextAPI";
import Form from "./Form";

describe("Form Component Test", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <ContextAPIProvider>
          <Form />
        </ContextAPIProvider>
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Player One Label", () => {
    const { getByText } = render(
      <Router>
        <ContextAPIProvider>
          <Form />
        </ContextAPIProvider>
      </Router>
    );
    expect(getByText("Player 1 Name")).toBeInTheDocument();
    expect(getByText("Player 2 Name")).toBeInTheDocument();
  });

  it("Player One Label", () => {
    const { getByText } = render(
      <Router>
        <ContextAPIProvider>
          <Form />
        </ContextAPIProvider>
      </Router>
    );
    expect(getByText("Player 1 Name")).toBeInTheDocument();
    // expect(getByText("Player 2 Name")).toBeInTheDocument();
  });

  it("Continue Button", async () => {
    // const handleClick = jest.fn();
    const { getByTestId } = render(
      <Router>
        <ContextAPIProvider>
          <Form />
        </ContextAPIProvider>
      </Router>
    );
    const btn = getByTestId("continue-btn");

    // await fireEvent.click(btn);

    expect(btn).toHaveTextContent("Continue");
  });
});
