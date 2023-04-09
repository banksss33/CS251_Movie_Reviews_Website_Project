import { Container, DropdownButton, Row } from "react-bootstrap";
import MovieCard from "../component/componentFile/MovieCard";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { useState, useEffect } from "react";
import axios from "axios";
import "../component/style/showall.css";

function Showall() {
  const [selectedSort, setSelectedSort] = useState("Default");
  const [selectedGenre, setSelectedGenre] = useState("All");
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
        padding: "5% 8%",
      }}
    >
      <Container>
        <Row className="ms-3 mb-3 d-flex">
          <div className="d-flex">
            <p className="text-light" style={{ fontSize: "23px" }}>
              Select Genre:{" "}
            </p>
            <DropdownButton variant="outline-warning" title={selectedGenre}>
              <DropdownItem onClick={() => handleGenreSelect("All")}>
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

            <div className="ms-3 d-flex">
              <p className="text-light" style={{ fontSize: "23px" }}>
                Sort by:
              </p>
              <DropdownButton variant="outline-warning" title={selectedSort}>
                <DropdownItem onClick={() => handleSortSelect("Default")}>
                  Default
                </DropdownItem>
                <DropdownItem onClick={() => handleSortSelect("Newest")}>
                  Newest
                </DropdownItem>
                <DropdownItem onClick={() => handleSortSelect("Oldest")}>
                  Oldest
                </DropdownItem>
              </DropdownButton>
            </div>
          </div>
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
