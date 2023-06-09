import React from "react";

const data = [
  {
    "name": "Baked Salmon",
    "ingredients": [
      { "name": "Salmon", "amount": 1, "measurement": "lb" },
      { "name": "Pine Nuts", "amount": 1, "measurement": "cup" },
      { "name": "Butter Lettuce", "amount": 2, "measurement": "cups" },
      { "name": "Yellow Squash", "amount": 1, "measurement": "med" },
      { "name": "Olive Oil", "amount": 0.5, "measurement": "cup" },
      { "name": "Garlic", "amount": 3, "measurement": "cloves" }
    ],
    "steps": [
      "Preheat the oven to 350 degrees.",
      "Spread the olive oil around a glass baking dish.",
      "Add the salmon, garlic, and pine nuts to the dish.",
      "Bake for 15 minutes.",
      "Add the yellow squash and put back in the oven for 30 mins.",
      "Remove from oven and let cool for 15 minutes. Add the lettuce and serve."
    ]
  },
  {
    "name": "Fish Tacos",
    "ingredients": [
      { "name": "Whitefish", "amount": 1, "measurement": "lb" },
      { "name": "Cheese", "amount": 1, "measurement": "cup" },
      { "name": "Iceberg Lettuce", "amount": 2, "measurement": "cups" },
      { "name": "Tomatoes", "amount": 2, "measurement": "large" },
      { "name": "Tortillas", "amount": 3, "measurement": "med" }
    ],
    "steps": [
      "Cook the fish on the grill until hot.",
      "Place the fish on the 3 tortillas.",
      "Top them with lettuce, tomatoes, and cheese."
    ]
  }
]

function Recipe({ name, ingredients, steps }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient, i) => (
          <li key={i}>
            {ingredient.name}
          </li>
        ))}
      </ul>
      <section>
        <h3>Cooking Instructions</h3>
        <ul>
          {steps.map((step, i) => (
            <ol key={i}>{step}</ol>
          ))}
        </ul>
      </section>
    </section>
  )
}

function Menu({ recipes, title }) {
  return (
    <article>
      <header>
        <h1>{title}</h1>
      </header>
      <div>
        {recipes.map((recipe, i) =>
          <Recipe
            key={i}
            {...recipe}
          />)}
      </div>
    </article>
  )
}

function Ch5() {
  return (
    <Menu recipes={data} title="Delicious Recipes" />
  )
}

export default Ch5;