import React from "react";

function Instructions({ title, steps }) {
	return (
		<section>
			<h3>{title}</h3>
			<ul>
				{steps.map((step, i) => (
					<ol key={i}>{step}</ol>
				))}
			</ul>
		</section>
	)
}

export default Instructions;