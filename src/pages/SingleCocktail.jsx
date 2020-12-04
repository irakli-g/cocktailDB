import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const SingleCocktail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}${id}`);
        if (response.ok) {
          const data = await response.json();
          const drink = data.drinks;
          const newDrink = drink.map((item) => {
            const {
              strDrink: name,
              strCategory: category,
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
              strIngredient6,
              strIngredient7,
              strIngredient8,
              strDrinkThumb: image,
              strInstructions: instructions,
            } = item;
            return {
              name,
              category,
              image,
              instructions,
              ingList: [
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
                strIngredient6,
                strIngredient7,
                strIngredient8,
              ],
            };
          });
          setCocktail(newDrink[0]);
        }
      } catch (e) {
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  const { name, category, image, ingList, instructions } = cocktail;
  return (
    <section id="single-cocktail">
      <div className="single-cocktail-card">
        <figure className="single-cocktail-image">
          <img src={image} alt={name} />
        </figure>
        <div className="single-cocktail-info">
          <h1 className="single-cocktail-heading">{name}</h1>
          <h2 className="single-cocktail-category">{category}</h2>
          <div className="single-cocktail-instructions">
            <h3 className="instructions-heading">Instructions:</h3>
            <p className="instructions-content">{instructions}</p>
          </div>
          <div className="single-cocktail-ingredients">
            <h3 className="ingredients-heading">Ingredients:</h3>
            <ul>
              {ingList.map((i, index) => {
                return i ? <li key={index}>{i}</li> : null;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
