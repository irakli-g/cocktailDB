import React from "react";
import { Cocktail } from "./Cocktail";
import { useGlobalContext } from "../Context";
import { Loading } from "./Loading";

export const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="no-data">Sorry There Were No Cocktails For That Name</h2>
    );
  }
  return (
    <section id="cocktail-list">
      {cocktails.map((item) => {
        return <Cocktail key={item.id} {...item} />;
      })}
    </section>
  );
};
