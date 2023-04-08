import { Container, DropdownButton, Row } from "react-bootstrap";
import MovieCard from "../component/componentFile/MovieCard";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import axios from "axios";
import { useState } from "react";

function Showall() {

  const [sortMovieList, setSortMovieList] = useState("Moviepage");

  const handleInputSort = (event) => {
    setSortMovieList(event.target.value);
  };

  const selectSortNew = () => {
    setSortMovieList("sortByNewestYear");
  };

  const selectSortDefualt = () => {
    setSortMovieList("Moviepage");
  };

  const selectSortOld = () => {
    setSortMovieList("sortByOldestYear");
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
            <DropdownItem><button value="Action" onClick={handleInputSort}>Action</button></DropdownItem>
            <DropdownItem><button value="Adventure" onClick={handleInputSort}>Adventure</button></DropdownItem>
            <DropdownItem><button value="Biography" onClick={handleInputSort}>Biography</button></DropdownItem>
            <DropdownItem><button value="Crime" onClick={handleInputSort}>Crime</button></DropdownItem>
            <DropdownItem><button value="Drama" onClick={handleInputSort}>Drama</button></DropdownItem>
            <DropdownItem><button value="Family" onClick={handleInputSort}>Family</button></DropdownItem>
            <DropdownItem><button value="Fantasy" onClick={handleInputSort}>Fantasy</button></DropdownItem>
            <DropdownItem><button value="History" onClick={handleInputSort}>History</button></DropdownItem>
            <DropdownItem><button value="Mystery" onClick={handleInputSort}>Mystery</button></DropdownItem>
            <DropdownItem><button value="Romance" onClick={handleInputSort}>Romance</button></DropdownItem>
            <DropdownItem><button value="Sci-Fi" onClick={handleInputSort}>Sci-Fi</button></DropdownItem>
            <DropdownItem><button value="thriller" onClick={handleInputSort}>thriller</button></DropdownItem>
            <DropdownItem><button value="War" onClick={handleInputSort}>War</button></DropdownItem>
            <DropdownItem><button value="Western" onClick={handleInputSort}>Western</button></DropdownItem>
          </DropdownButton>
        </Row>

        <Row className="mt-4 mb-4 ms-3">
          <DropdownButton variant="outline-warning" title="Sort">
            <DropdownItem><button onClick={selectSortDefualt}>Defualt</button></DropdownItem>
            <DropdownItem><button onClick={selectSortNew}>Newest</button></DropdownItem>
            <DropdownItem><button onClick={selectSortOld}>Oldest</button></DropdownItem>
          </DropdownButton>
        </Row>

        <MovieCard col={4} showFrom={sortMovieList} />
      </Container>
    </div>
  );
}

export default Showall;
