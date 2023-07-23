import React from "react";
import { FaApple } from "react-icons/fa";

const Star = ({ selected }) => {
	return <FaApple
		color={selected ? "red" : "white"}
	/>
}

const createArray = length => [...Array(length)];

const StarRating = ({
	totalStars = 5,
	selectedStars = 2
}) => {
	return (
		<>
			{createArray(totalStars).map((star, i) =>
				<Star
					key={i}
					selected={selectedStars > i}
				/>
			)}
		</>
	)
}

export default StarRating;