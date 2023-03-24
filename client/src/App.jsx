import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import axios from "axios";
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
import Showall from "./Page/Showall";
import Moviepage from "./Page/Moviepage";
import "../src/component/style/SearchBar.css"

function App() {
  const [movieList, setmovieList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTitle, setSelectedTitle] = useState("All");

  const onchange = event => {setSearchTerm(event.target.value)}

  useEffect(() => {
    const getmovie = () => {
      axios.get("http://localhost:3001/MovieListforSearch").then((response) => {
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
            <Form.Control aria-label="Text input with dropdown button" type="text" value={searchTerm} placeholder="Search" onChange={onchange} />          
            {/* Data results */}
            <div className="dropdownSearch">
              {/* filter for search */}
                {movieList.filter((val) => {

                  const search = searchTerm.toLowerCase();
                  const name = val.Title.toLowerCase();

                  return search && name.startsWith(search);
                }).map((val, key) => {
                  // to show all the movie title
                    return (
                          <div key={key}>
                            <button className="dropdownbutton" onClick={() => setSearchTerm(val.Title)}>
                              {val.Title}
                            </button>
                          </div>            
                    )
                })}
            </div>
          </InputGroup>
        </Nav>

        <Nav
          style={{
            marginLeft: "100px",
          }}
          className="border-start border-secondary rounded-0"
        >
          {/* Test searching */}
          <LinkContainer to="/test">
            <Nav.Link>test moviepage</Nav.Link>
          </LinkContainer>

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
        <Route path="/test" element={<Moviepage />} />
        <Route path="/WatchList" element={<Showall />} />
      </Routes>
      
    </BrowserRouter>

    
  );
}

export default App;
