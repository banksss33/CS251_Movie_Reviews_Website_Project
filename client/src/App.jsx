import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Hub from "./Page/Homepage";
import SignIn from "./Page/SignIn";
import Showall from "./Page/Showall";
import Moviepage from "./Page/Moviepage";
import "../src/component/style/SearchBar.css";
import { Col, Container, Row } from "react-bootstrap";
import NotFound from "./Page/NotFound";
import Stars from "./component/componentFile/Stars";

function App() {
  const [movieList, setmovieList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [averageScoreList, setAverageScoreList] = useState([]);
  const [showNickname, setShowNickname] = useState("");

  const onchange = (event) => setSearchTerm(event.target.value);
  const searchRef = useRef();
  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const getmovie = () => {
      axios.get("http://localhost:3001/search").then((response) => {
        setmovieList(response.data);
      });
    };
    
    const getAverageScore = () => {
      axios.get("http://localhost:3001/averageScore").then((response) => {
        setAverageScoreList(response.data);
      });     
    };

    const showName = () => {
      setShowNickname(localStorage.getItem("yourName"));
    };

    getmovie();
    getAverageScore();
    showName();
  }, [localStorage.getItem("yourName")]);

  return (
    <BrowserRouter>
      <Navbar
        fixed="top"
        variant="dark"
        className="d-flex shadow justify-content-between"
        style={{
          paddingLeft: "40px",
          paddingRight: "40px",
          zIndex: 10,
        }}
      >
        <LinkContainer to="/">
          <Navbar.Brand>!ICON!</Navbar.Brand>
        </LinkContainer>

        <Nav>
          <InputGroup>
            <InputGroup.Text
              className="shadow"
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <box-icon name="search" />
            </InputGroup.Text>
            <div ref={searchRef}>
              <Form.Control
                id="searchmovie"
                aria-label="Text input with dropdown button"
                type="text"
                value={searchTerm}
                placeholder="Search"
                onChange={onchange}
                onClick={() => setIsShow(true)}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  width: "500px",
                }}
                className="shadow text-light"
              />
              {/* Data results */}
              <Container className="dropdownSearch">
                {/* filter for search */}
                <div style={{ display: isShow ? "block" : "none" }}>
                  {movieList
                    .filter((val) => {
                      const search = searchTerm.toLowerCase();
                      const name = val.Title.toLowerCase();

                      return search && name.startsWith(search);
                    })
                    .map((val, key) => {
                      // to show all the movie title
                      return (
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/Moviepage/${val.MovieID}`}
                          onClick={() => {
                            setSearchTerm("");
                          }}
                        >
                          <Row key={key} className="rowSearch border-bottom">
                            <Col className="d-flex">
                              <img
                                style={{
                                  paddingTop: "0.5%",
                                  paddingBottom: "0.5%",
                                  width: "75px",
                                  height: "100%",
                                  minHeight: "105px",
                                }}
                                src={val.ImageLink}
                              />
                              <div className="clickSearch">
                                <strong>{val.Title}</strong>
                                <p>{val.Year}</p>
                                {averageScoreList.map((avg) => {
                                  if(avg.MovieID === val.MovieID) {
                                    return (
                                      <Stars stars={avg.average_score}/>
                                    )
                                  }
                                })}
                              </div>
                            </Col>
                          </Row>
                        </Link>
                      );
                    })}
                </div>
              </Container>
            </div>
          </InputGroup>

          <LinkContainer to="/WatchList">
            <Nav.Link>WatchList</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/SignIn">
            <Nav.Link>{localStorage.getItem("yourName") === "" ? (
                <>SignIn</>
              ) : (
                <>{showNickname}</>
              )}</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>

      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Moviepage/:ID" element={<Moviepage />} />
        <Route path="/WatchList" element={<Showall />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
