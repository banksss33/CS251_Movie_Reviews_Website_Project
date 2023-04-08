import { Container, DropdownButton, Row } from "react-bootstrap";
import MovieCard from "../component/componentFile/MovieCard";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import axios from "axios";
import { useState, useEffect } from "react";

function Showall() {
  const [selectedSort, setSelectedSort] = useState("Default");
  const [selectedGenre, setSelectedGenre] = useState("Default");

  const genres = [
    "Action",
    "Adventure",
    "Biography",
    "Crime",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "War",
    "Western",
  ];

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  const handleSortSelect = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div
      style={{
        backgroundColor: "rgb(0,22,22)",
        padding: "100px 125px",
      }}
      className="d-flex"
    >
      <Container>
        <Row className="ms-3">
          <DropdownButton variant="outline-warning" title="Genre">
            {genres.map((genre) => (
              <DropdownItem
                key={genre}
                onClick={() => handleGenreSelect(genre)}
              >
                {genre}
              </DropdownItem>
            ))}
          </DropdownButton>
        </Row>

        <Row className="mt-4 mb-4 ms-3">
          <DropdownButton variant="outline-warning" title="Sort">
            <DropdownItem onClick={() => handleSortSelect("Default")}>
              Default
            </DropdownItem>
            <DropdownItem onClick={() => handleSortSelect("sortByNewestTear")}>
              Newest
            </DropdownItem>
            <DropdownItem onClick={() => handleSortSelect("sortByOldestYear")}>
              Oldest
            </DropdownItem>
          </DropdownButton>
        </Row>

        <MovieCard
          col={4}
          showFrom="getMovies"
          selectedSort={selectedSort}
          selectedGenre={selectedGenre}
        />
      </Container>
    </div>
  );
}

export default Showall;
