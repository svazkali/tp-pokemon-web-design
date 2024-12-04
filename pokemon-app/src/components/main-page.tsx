import React, { useState } from "react";
import Header from "./header";
import Navbar from "./navbar";
import Card from "./pokemon-cards/card";

const MainPage: React.FC = () => {
	const [selectedType, setSelectedType] = useState<string | null>(null);

	const handleTypeSelect = (type: string) => {
		setSelectedType(type);
	};

	return (
		<div>
			<Header />
			<Navbar onTypeSelect={handleTypeSelect} />
			<main style={styles.main}>
				{selectedType ? (
					<h2 style={styles.heading}>Selected Type: {selectedType}</h2>
				) : (
					<h2 style={styles.heading}>Select a Pokémon Type</h2>
				)}
				<div style={styles.cardsContainer}>
					{/* Example: Showing one card for demonstration */}
					<Card
						id={4}
						name="Charmander"
						url=""
						hp={40}
						description={"sarasa"}
						type="fire"
					/>
				</div>
			</main>
		</div>
	);
};

const styles = {
	main: {
		padding: "20px",
		textAlign: "center" as const,
	},
	heading: {
		fontSize: "22px",
		color: "#333",
		margin: "20px 0",
	},
	cardsContainer: {
		display: "flex",
		justifyContent: "center",
		gap: "20px",
		flexWrap: "wrap" as const,
	},
};

export default MainPage;
