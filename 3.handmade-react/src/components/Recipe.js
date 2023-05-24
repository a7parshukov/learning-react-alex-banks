import React from "react";
import Instructions from "./Instructions";
import IngredientsList from "./IngredientsList";

function Recipe({ name, ingredients, steps }) {
    return (
      <section id={name.toLowerCase().replace(/ /g, "-")}>
        <h2>{name}</h2>
        <IngredientsList list={ingredients} />
        <Instructions title="Cooking Instructions" steps={steps} />
      </section>
    )
  }

export default Recipe;