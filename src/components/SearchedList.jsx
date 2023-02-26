import { Link } from "react-router-dom";

const SearchedList = ({ characters }) => {
  return (
    <div className="card-list">
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

export default SearchedList;
