import React, { useState } from "react";
// библиотека с SVG иконками npm install react-icons
import { FaStar } from "react-icons/fa";

const createArray = length => [...Array(length)];

const Star = ({ selected = false, onSelect = f => f }) => (
	<FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
)

export default function StarRating({ 
	style = {}, 
	totalStars = 5, 
	selectedStars = 0,
	onRate = f => f
}) {

	return (
		<div style={{ padding: "5px", ...style }}>
			{
				createArray(totalStars).map((n, i) => (
					<Star
						key={i}
						selected={selectedStars > i}
						onSelect = {() => onRate(i + 1)}
					/>
				))
			}
			< p >
				{selectedStars} of {totalStars} stars
			</p >
		</div >
	)
}