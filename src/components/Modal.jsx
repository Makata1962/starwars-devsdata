import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

const CharacterModal = ({ isOpen, closeModal, character }) => {
  const { height, mass, hair_color, skin_color } = character;
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "400px",
      width: "400px",
      background: "#0c1d36",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Character Modal"
    >
      <h2>{character.name}</h2>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Hair Color: {hair_color}</p>
      <p>Skin Color: {skin_color}</p>
      <button onClick={closeModal}>Close Modal</button>
      <Link to={`/character/${character.url.split("/").slice(-2, -1)}`}>
        <button>View More</button>
      </Link>
    </Modal>
  );
};

CharacterModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    mass: PropTypes.string.isRequired,
    hair_color: PropTypes.string.isRequired,
    skin_color: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default CharacterModal;
