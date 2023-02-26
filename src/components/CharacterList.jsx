import classes from "./CharacterList";
import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import SearchedList from "./SearchedList";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 10; // number of results per page

  useEffect(() => {
    setLoading(true);
    fetch(`https://swapi.dev/api/people/?page=${pageNumber}&limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setTotalPages(Math.ceil(data.count / limit));
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [pageNumber]);

  useEffect(() => {
    const newFilterCharacters = characters.filter((character) => {
      return character.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredCharacters(newFilterCharacters);
  }, [characters, searchField]);

  const handlePrevPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  };

  const handleNextPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className={classes.character_list_container}>
      <h1>Star Wars Characters</h1>
      <SearchBox
        className="star_wars_searchbox"
        onChangeHandler={onSearchChange}
        placeholder="search character"
      />
      <SearchedList characters={filteredCharacters} />

      <div className={classes.pagination}>
        <button
          onClick={handlePrevPage}
          disabled={pageNumber === 1}
          className={classes.button}
        >
          Prev
        </button>
        <span>
          Page {pageNumber} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={pageNumber === totalPages}
          className={classes.button}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterList;
