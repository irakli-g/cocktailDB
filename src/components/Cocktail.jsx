import React, { useEffect, useState } from "react";
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
        <p className="cocktal-instructions">
          {instructions.length > 150
            ? instructions.substring(0, 150)
            : instructions}
          {instructions.length > 150 && (
            <button className="readMore-btn">
              <Link to={`/cocktail/${id}`} className="readMore-link">
                ...Read More
              </Link>
            </button>
          )}
        </p>
        <button className="cocktail-details">
          <Link to={`/cocktail/${id}`} className="btn-link">
            Details
          </Link>
        </button>
      </div>
    </div>
  );
};
