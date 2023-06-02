import React from "react";
import Ingredient from "./Ingredients";

function IngredientsList({ list }) {
	return (
		<ul>
			{list.map((ingredient, i) => (
				<Ingredient key={i} {...ingredient} />
			))}
		</ul>
	)
}

export default IngredientsList;