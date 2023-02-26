import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.url}>
            <Link to={`/character/${character.url.split("/").slice(-2, -1)}`}>
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
