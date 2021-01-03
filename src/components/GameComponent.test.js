import { render, fireEvent, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import ContextAPIProvider from "../context/ContextAPI";
import GameComponent from "./GameComponent";

describe("Game Component in Component folder test", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ContextAPIProvider>
        <Router>
          <GameComponent />
        </Router>
      </ContextAPIProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Player score count at the start", () => {
    const { getByTestId } = render(
      <ContextAPIProvider>
        <Router>
          <GameComponent />
        </Router>
      </ContextAPIProvider>
    );

    expect(getByTestId("player-score").textContent).toBe("0");
  });

  it("Add button should increment", () => {
    const { getByTestId } = render(
      <ContextAPIProvider>
        <Router>
          <GameComponent />
        </Router>
      </ContextAPIProvider>
    );

    const count = getByTestId(`player-score`);
    const add = getByTestId(`add-btn`);

    fireEvent.click(add);
    expect(count.innerHTML).toBe("1");
  });
});
