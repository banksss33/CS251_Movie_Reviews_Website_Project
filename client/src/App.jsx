import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Hub from "./Page/Homepage";
import SignIn from "./Page/SignIn";
import Showall from "./Page/Showall";
import Moviepage from "./Page/Moviepage";
import "../src/component/style/SearchBar.css";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const [movieList, setmovieList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("All");

  const onchange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const getmovie = () => {
      axios.get("http://localhost:3001/ctList").then((response) => {
        setmovieList(response.data);
      });
    };

    getmovie();
  }, []);

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
            <InputGroup.Text>Icon</InputGroup.Text>

            <Form.Control
              id="searchmovie"
              aria-label="Text input with dropdown button"
              type="text"
              value={searchTerm}
              placeholder="Search"
              onChange={onchange}
              className="border border-warning"
            />
            {/* Data results */}
            <Container className="dropdownSearch">
              {/* filter for search */}
              {movieList
                .filter((val) => {
                  const search = searchTerm.toLowerCase();
                  const name = val.Title.toLowerCase();

                  return search && name.startsWith(search);
                })
                .map((val, key) => {
                  // to show all the movie title
                  return (
                    <Row key={key}>
                      <Col>
                        <Link
                          className=""
                          onClick={() => {
                            setSearchTerm(val.Title);
                          }}
                          to={"/Moviepage/".concat(val.MovieID)}
                        >
                          {val.Title}
                        </Link>
                      </Col>
                    </Row>
                  );
                })}
            </Container>
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
        <Route path="/Moviepage/:ID" element={<Moviepage />} />
        <Route path="/WatchList" element={<Showall />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
