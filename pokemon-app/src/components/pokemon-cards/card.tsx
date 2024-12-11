
import React, { useState } from "react";
import Modal from "react-modal";

interface Pokemon {
    id: number;
    name: string;
    type: string;
    image: string;
    hp: number;
    description: string;
}

interface PokemonCardProps {
    pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div
                style={styles.card}
                onClick={openModal}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
                <img src={pokemon.image} alt={pokemon.name} style={styles.image} />
                <div style={styles.text}>
                    <p style={styles.id}>N.º {pokemon.id.toString().padStart(4, "0")}</p>
                    <h3 style={styles.name}>{pokemon.name}</h3>
                    <div style={{ ...styles.type, backgroundColor: getTypeBackgroundColor(pokemon.type) }}>
                        {pokemon.type}
                    </div>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={modalStyles}>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.image} alt={pokemon.name} style={{ width: "100%", borderRadius: "8px" }} />
                <p><strong>ID:</strong> {pokemon.id}</p>
                <p><strong>HP:</strong> {pokemon.hp}</p>
                <p><strong>Tipo:</strong> {pokemon.type}</p>
                <p><strong>Descripción:</strong> {pokemon.description}</p>
                <button onClick={closeModal} style={styles.closeButton}>Cerrar</button>
            </Modal>
        </>
    );
};

const getTypeBackgroundColor = (type: string): string => {
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

const styles: { [key: string]: React.CSSProperties } = {
    card: {
        width: "200px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
        textAlign: "center" as React.CSSProperties["textAlign"],
        backgroundColor: "#fff",
        cursor: "pointer",
        transition: "transform 0.2s ease-in-out",
    },
    image: {
        width: "100%",
        height: "auto",
        objectFit: "cover" as React.CSSProperties["objectFit"],
    },
};


const modalStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "400px",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        fontFamily: "Arial, sans-serif",
    },
};

export default PokemonCard;
