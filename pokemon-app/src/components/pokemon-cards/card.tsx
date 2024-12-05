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
		<div style={styles.card}>
			<img
				src={url || "https://via.placeholder.com/150"}
				alt={name}
				style={styles.image}
			/>
			<div style={styles.text}>
				<p style={styles.id}>N.º {id.toString().padStart(4, "0")}</p>
				<h3 style={styles.name}>{name}</h3>
				<div style={styles.type}>{type}</div>
			</div>
		</div>
	);
};

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
		backgroundColor: "#ffa500",
		color: "#fff",
		borderRadius: "5px",
		fontSize: "14px",
		fontWeight: "bold" as const,
	},
};

export default Card;
