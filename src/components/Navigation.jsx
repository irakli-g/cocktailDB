import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <nav className="main-navigation">
        <figure className="navigation-icon">
          <Link className="navigation-link" to="/">
            <h3 className="navigation-name">
              The Cocktail<span className="navigation-name-DB">DB</span>
            </h3>
          </Link>
        </figure>
        <ul>
          <li>
            <Link to="/" className="navigation-link">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link to="/about" className="navigation-link">
              {" "}
              About{" "}
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="navigation-link">
              {" "}
              Contact{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
