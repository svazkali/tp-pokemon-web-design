import React from "react";
import { PokemonType } from "../pokemons/types";

interface NavbarProps {
	onTypeSelect: (type: PokemonType | null) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onTypeSelect }) => {
	const types = [
		"fire",
		"water",
		"grass",
		"electric",
		"normal",
	] as PokemonType[];

	return (
		<nav style={styles.nav}>
			{types.map((type) => (
				<button
					key={type}
					style={styles.button}
					onClick={() => onTypeSelect(type)}>
					{type}
				</button>
			))}
			<button style={styles.button} onClick={() => onTypeSelect(null)}>
				Todos
			</button>
		</nav>
	);
};

const styles = {
	nav: {
		display: "flex",
		justifyContent: "center",
		backgroundColor: "#f4f4f4",
		padding: "10px 0",
		borderBottom: "1px solid #ddd",
	},
	button: {
		margin: "0 10px",
		padding: "10px 15px",
		border: "none",
		borderRadius: "5px",
		backgroundColor: "#e0e0e0",
		fontSize: "14px",
		fontWeight: "bold" as const,
		cursor: "pointer",
		textTransform: "capitalize" as const,
		transition: "background-color 0.3s",
	},
	buttonHover: {
		backgroundColor: "#d0d0d0",
	},
};

export default Navbar;
