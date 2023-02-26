import { Link } from "react-router-dom";
import { useState } from "react";
import CharacterModal from "./Modal";
import classes from "./SearchedList.module.scss";

const SearchedList = ({ characters }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCharacterHover = (character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedCharacter(null);
    setIsModalOpen(false);
  };

  return (
    <div className={classes.list_container}>
      <ul>
        {characters.map((character) => (
          <li key={character.url}>
            <Link
              onClick={() => handleCharacterHover(character)}
              className={classes.character}
            >
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
      {selectedCharacter && isModalOpen && (
        <CharacterModal
          character={selectedCharacter}
          closeModal={handleModalClose}
          isOpen={Boolean(selectedCharacter)}
          onRequestClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default SearchedList;
