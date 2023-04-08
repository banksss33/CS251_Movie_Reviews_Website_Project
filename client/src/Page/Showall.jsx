import { Container, DropdownButton, Row } from "react-bootstrap";
import MovieCard from "../component/componentFile/MovieCard";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import axios from "axios";
import { useState } from "react";

function Showall() {

  const [sortMovieList, setSortMovieList] = useState("Moviepage");

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
            <DropdownItem></DropdownItem>
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
