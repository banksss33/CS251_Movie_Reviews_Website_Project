import Button from "react-bootstrap/Button";
import React, { useState } from "react";
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
import Moviepage from "./Page/Moviepage";

// test database
import ShowAccount from "./component/account";

function App() {
  const [selectedTitle, setSelectedTitle] = useState("All");

  const handleSelect = (eventKey) => {
    setSelectedTitle(eventKey);
  };
  return (
    <BrowserRouter>
      <Navbar
        bg="dark"
        variant="dark"
        className="d-flex justify-content-center"
        style={{
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        <LinkContainer to="/">
          <Navbar.Brand>Blockbuster</Navbar.Brand>
        </LinkContainer>

        <Nav className="flex-grow-1">
          <InputGroup>
            <DropdownButton
              variant="outline-warning"
              title={selectedTitle}
              id="input-group-dropdown-1"
              onSelect={handleSelect}
            >
              <Dropdown.Item eventKey="All" href="#">
                All
              </Dropdown.Item>
              <Dropdown.Item eventKey="Actor" href="#">
                Actor
              </Dropdown.Item>
              <Dropdown.Item eventKey="Movie" href="#">
                Movie
              </Dropdown.Item>
              <Dropdown.Item eventKey="TV Series" href="#">
                TV Series
              </Dropdown.Item>
            </DropdownButton>
            <Form.Control aria-label="Search input" />
          </InputGroup>
        </Nav>

        <Nav
          style={{
            marginLeft: "100px",
          }}
          className="border-start border-secondary rounded-0"
        >
          <LinkContainer to="/WatchList">
            <Nav.Link>Watch list</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/SignIn">
            <Nav.Link>SignIn</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>

      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/WatchList" element={<Moviepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
