import { Container, DropdownButton, Row } from "react-bootstrap";
import MovieCard from "../component/componentFile/MovieCard";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

function Showall() {
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
            <DropdownItem></DropdownItem>
          </DropdownButton>
        </Row>

        <MovieCard col={4} showFrom="ctList" />
      </Container>
    </div>
  );
}

export default Showall;
