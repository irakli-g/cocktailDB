import React from "react";
import { Form } from "../components/Form";
import { CocktailList } from "../components/CocktailsList";

export const Home = () => {
  return (
    <>
      <section id="form">
        <Form />
      </section>
      <section id="home-wrapper">
        <CocktailList />
      </section>
    </>
  );
};
