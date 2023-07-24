import React, { useState } from "react";
import { FaApple } from "react-icons/fa";

const Star = ({ selected, onSelect = f => f }) => {
	return <FaApple
		color={selected ? "red" : "white"}
		onClick={onSelect}
	/>
}

const createArray = length => [...Array(length)];

const StarRating = ({
	totalStars = 5,
}) => {
	const [selectedStars, setSelectedStars] = useState(0);
	return (
		<>
			{createArray(totalStars).map((star, i) =>
				<Star
					key={i}
					selected={selectedStars > i}
					onSelect={() => setSelectedStars(i + 1)}
				/>
			)}
			<p>{selectedStars} of {totalStars} stars</p>
		</>
	)
}

export default StarRating;