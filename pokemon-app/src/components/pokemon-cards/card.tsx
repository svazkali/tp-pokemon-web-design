import React from "react";
import { PokemonType } from "../../pokemons/types";

interface PokemonCardProps {
	name: string;
	id: number;
	url: string;
	hp: number;
	type: PokemonType;
	description: string;
}

const Card: React.FC<PokemonCardProps> = ({
	id,
	name,
	type,
	hp,
	description,
	url,
}) => {
	return (
		<div style={getCardStyles().card}>
			<img
				src={url || "https://via.placeholder.com/150"}
				alt={name}
				style={getCardStyles().image}
			/>
			<div style={getCardStyles().text}>
				<p style={getCardStyles().id}>N.º {id.toString().padStart(4, "0")}</p>
				<h3 style={getCardStyles().name}>{name}</h3>
				<div style={getCardStyles(type).type}>{type}</div>
			</div>
		</div>
	);
};

const getTypeBackgroundColor = (type?: PokemonType) => {
	switch (type) {
		case "fire":
			return "#f08030";
		case "water":
			return "#6890f0";
		case "grass":
			return "#78c850";
		case "electric":
			return "#f8d030";
		case "normal":
			return "#a8a878";
		default:
			return "#a8a878";
	}
};

const getCardStyles = (type?: PokemonType) => {
	const styles = {
		card: {
			width: "200px",
			border: "1px solid #ddd",
			borderRadius: "8px",
			overflow: "hidden",
			boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
			fontFamily: "Arial, sans-serif",
			textAlign: "center" as const,
			backgroundColor: "#fff",
		},
		image: {
			width: "100%",
			height: "fit-content",
			objectFit: "cover" as const,
		},
		text: {
			padding: "10px",
		},
		id: {
			margin: "5px 0",
			fontSize: "14px",
			color: "#888",
		},
		name: {
			margin: "10px 0",
			fontSize: "18px",
			fontWeight: "bold" as const,
			color: "#333",
		},
		type: {
			marginTop: "10px",
			padding: "5px 10px",
			display: "inline-block",
			backgroundColor: getTypeBackgroundColor(type),
			color: "#fff",
			borderRadius: "5px",
			fontSize: "14px",
			fontWeight: "bold" as const,
		},
	};
	return styles;
};

export default Card;
