import { Container, DropdownButton, Row } from "react-bootstrap";
import MovieCard from "../component/componentFile/MovieCard";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { useState, useEffect } from "react";
import axios from "axios";
import "../component/style/showall.css";

function Showall() {
  const [selectedSort, setSelectedSort] = useState("Default");
  const [selectedGenre, setSelectedGenre] = useState("Default");
  const [allGenre, setAllGenre] = useState([]);

  useEffect(() => {
    const getGenres = () => {
      axios.get("http://localhost:3001/getGenres").then((response) => {
        setAllGenre(response.data);
      });
    };

    getGenres();
  }, []);

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
        <div className="row">
          <div className="flex-column col-8">
            <Row className="ms-3">
              <DropdownButton variant="outline-warning" title="Genre">
                <DropdownItem onClick={() => handleGenreSelect("Default")}>
                  All
                </DropdownItem>
                {allGenre.map((val) => (
                  <DropdownItem
                    key={val.Genre}
                    onClick={() => handleGenreSelect(val.Genre)}
                  >
                    {val.Genre}
                  </DropdownItem>
                ))}
              </DropdownButton>
            </Row>

            <Row className="mt-4 mb-4 ms-3">
              <DropdownButton variant="outline-warning" title="Sort">
                <DropdownItem onClick={() => handleSortSelect("Default")}>
                  Default
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleSortSelect("sortByNewestYear")}
                >
                  Newest
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleSortSelect("sortByOldestYear")}
                >
                  Oldest
                </DropdownItem>
              </DropdownButton>
            </Row>
          </div>
          <div className="flex-column col-4 showed-select">
            {selectedGenre === "Default" ? (
              <p></p>
            ) : (
              <h2 className="genre-text">{selectedGenre}</h2>
            )}

            {selectedSort === "Default" ? (
              <p></p>
            ) : selectedSort === "sortByNewestYear" ? (
              <h3 className="sort-text">Newest movie</h3>
            ) : selectedSort === "sortByOldestYear" ? (
              <h3 className="sort-text">Oldest movie</h3>
            ) : (
              <h3 className="sort-text">{selectedSort}</h3>
            )}
          </div>
        </div>

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
