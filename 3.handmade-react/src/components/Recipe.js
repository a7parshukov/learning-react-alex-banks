import React from "react";
import Instructions from "./Instructions";

function Recipe({ name, ingredients, steps }) {
    return (
      <section id={name.toLowerCase().replace(/ /g, "-")}>
        <h2>{name}</h2>
        <Ingre
        <Instructions />
      </section>
    )
  }

export default Recipe;