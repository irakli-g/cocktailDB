import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <section id="error-404">
      <h1 className="error-heading">404 Not Found</h1>
      <p className="error-content">Such page does not exist :(</p>
      <button className="btn-goBack">
        <Link to="/" className="goBack-link">
          go back
        </Link>
      </button>
    </section>
  );
};
