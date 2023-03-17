import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Hub from "./Page/Homepage";
import SignIn from "./Page/SignIn";
import MovieDisplay from "./Page/Moviepage";

// test database
import ShowAccount from "./component/account"

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <LinkContainer to="/" style={{ paddingLeft: "360px" }}>
          <Navbar.Brand>Blockbuster</Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          <InputGroup className="ps-3">
            <DropdownButton
              variant="outline-warning"
              title="Search"
              bid="input-group-dropdown-1"
            >
              <Dropdown.Item href="#">Actor</Dropdown.Item>
              <Dropdown.Item href="#">Movie</Dropdown.Item>
              <Dropdown.Item href="#">TV Series</Dropdown.Item>
            </DropdownButton>
            <Form.Control aria-label="Search input" />
          </InputGroup>

          <div className="ps-5" href="#">
            <Button variant="outline-warning">All Movie</Button>{" "}
          </div>
        </Nav>
        <Nav className="justify-content-end">
          <LinkContainer to="/SignIn">
            <Nav.Link className="pe-5" href="#">
              SignIn
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>

      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Movie" element={<MovieDisplay />}/>
      </Routes>


    </BrowserRouter>
  );
}

export default App;
