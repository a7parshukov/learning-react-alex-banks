import React from "react";
import Ingredient from "./Ingredients";

function IngredientsList({ list }) {
	return (
		<ul>
			{list.map((ingredient, i) => (
				<li key={i}>
					{ingredient.name}
				</li>
			))}
		</ul>
	)
}

export default IngredientsList;