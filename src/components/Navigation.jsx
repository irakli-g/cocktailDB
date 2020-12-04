import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <nav className="main-navigation">
        <figure className="navigation-icon">
          <img
            src="https://www.pngitem.com/pimgs/m/50-502197_this-is-an-icon-for-a-cocktail-cocktail.png"
            alt="cocktail icon"
          />
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
