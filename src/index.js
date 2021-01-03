import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ContextAPIProvider from "./context/ContextAPI";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ContextAPIProvider>
        <App />
      </ContextAPIProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
