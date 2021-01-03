import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center vh-100 border d-flex justify-content-center align-items-center flex-column">
      <h4 className="align-items-center">404 - Not found</h4>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;
