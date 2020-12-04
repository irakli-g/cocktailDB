import React from "react";
import { Link } from "react-router-dom";

export const Cocktail = ({ name, image, instructions, category, id }) => {
  return (
    <div className="cocktail-card">
      <figure className="cocktail-image">
        <img src={image} alt={name} />
      </figure>
      <div className="cocktail-info">
        <h2 className="cocktail-title">{name}</h2>
        <h3 className="cocktail-category">{category}</h3>
        <p className="cocktal-instructions">{instructions}</p>
        <button className="cocktail-details">
          <Link to={`/cocktail/${id}`} className="btn-link">
            Details
          </Link>
        </button>
      </div>
    </div>
  );
};
