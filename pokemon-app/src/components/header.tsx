import React from "react";
import PokemonLogo from "../images/pokemon-logo.png";

const Header: React.FC = () => {
	return (
		<header style={styles.header}>
			<div style={styles.logo}>
				<img src={PokemonLogo} alt="Logo" style={styles.logoImage} />
			</div>
			<h1 style={styles.title}>Pokémon Explorer</h1>
		</header>
	);
};

const styles = {
	header: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: "10px 20px",
		backgroundColor: "#000",
		borderBottom: "2px solid #e0c020",
	},
	logo: {
		display: "flex",
		alignItems: "center",
	},
	logoImage: {
		height: "100px",
	},
	title: {
		fontSize: "24px",
		fontWeight: "bold" as const,
		margin: 0,
		color: "#fff",
		fontFamily: "Arial, sans-serif",
	},
};

export default Header;
