import React, { useContext, useEffect, useState } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const drinks = data.drinks;
      if (!drinks) {
        setCocktails([]);
      }
      const newDrinks = drinks.map((item) => {
        const {
          idDrink: id,
          strCategory: category,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strDrinkThumb: image,
          strDrink: name,
        } = item;
        return {
          id,
          name,
          image,
          category,
          instructions,
          ingredients: [
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
      setCocktails(newDrinks);
    } catch (e) {
      setErr(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [searchTerm]);
  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        loading,
        setLoading,
        cocktails,
        err,
        setErr,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
