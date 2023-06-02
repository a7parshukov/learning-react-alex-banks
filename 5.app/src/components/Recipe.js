import React from "react";
import Instructions from "./Instructions";
import IngredientsList from "./IngredientsList";
import StarRating from "./StarRating.jsx";

function Recipe({ name, ingredients, steps }) {
    return (
      <section id={name.toLowerCase().replace(/ /g, "-")}>
        <h2>{name}</h2>
        <div>Rating: <StarRating totalStars={5}/></div>
        <IngredientsList list={ingredients} />
        <Instructions title="Cooking Instructions" steps={steps} />
      </section>
    )
  }

export default Recipe;