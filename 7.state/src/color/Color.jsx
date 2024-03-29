import StarRating from "../components/StarRating";
import { FaTrash } from "react-icons/fa";

const Color = ({ id, title, color, rating, onRemove = f => f, onRate = f => f }) => {
	return (
		<section>
			<h1>{title}</h1>
			<button onClick={() => onRemove(id)}>
				<FaTrash />
			</button>
			<div style={{ height: 50, background: color }} />
			<StarRating selectedStars={rating} onRate={rating => onRate(id, rating)} />
		</section>
	);
}

export default Color;