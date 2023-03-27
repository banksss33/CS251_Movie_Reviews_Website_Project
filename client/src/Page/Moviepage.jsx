import "../component/style/Carousel.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Moviepage() {
  const [movieList, setmovieList] = useState([]);
  const [directorList, setdirectorList] = useState([]);
  const [actorList, setactorList] = useState([]);

  useEffect(() => {
    const getmovie = () => {
      axios.get("http://localhost:3001/ctList").then((response) => {
        setmovieList(response.data);
      });
    };

    const getdirector = () => {
      axios.get("http://localhost:3001/getDirector").then((response) => {
        setdirectorList(response.data);
      });
    };

    const getactor = () => {
      axios.get("http://localhost:3001/getActor").then((response) => {
        setactorList(response.data);
      });
    };

    getmovie();
    getdirector();
    getactor();
  }, []);

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let ID = parseInt(useQuery().get("ID"));
  return (
    <div style={{
      backgroundColor: "#51484f",
      padding: "100px 125px",
      color: "#fff"
    }}
    className="d-flex">
      <Container>
        {movieList.map((val) => {
          // to show all the movie title
          if (val.MovieID === ID) {
            return (
              <div>
                <Row>
                <span className="d-inline p-2 mb-4 text-white border-start border-warning border-4">
                  <h1><strong>{val.Title}</strong></h1>
                </span>
                  <br/><br/><br/><br/>
                </Row>
                <Row>
                  <Col className="col-sm-5">
                    <img class="img-fluid"
                      src={val.ImageLink}
                      alt="Data not found!"
                      style={{maxHeight:"700px"}}
                    />
                  </Col>
                  <Col className="col-sm-7" style={{
                    fontSize: "20px",
                  }}>
                    <Row className="mb-3">
                      <p>{val.Description}</p>
                    </Row>
                    <Row className="mb-3">
                      <div style={{display: "flex"}}>
                        <p className="col-sm-2 ps-3  border-start border-warning border-4"><strong>Director</strong></p>
                          <div className="col-sm-3">
                            {directorList.map((val, key) => {
                              // to show all the movie title
                              if (val.MovieID === ID) {
                                return (
                                  <div>
                                    <p>{val.DirectorName}</p>
                                  </div>
                                );
                              }
                            })}
                          </div>
                      </div>
                    </Row>
                    <Row className="mb-3">
                    <div style={{display: "flex"}}>
                    <p className="col-sm-2 ps-3  border-start border-warning border-4"><strong>Stars</strong></p>
                      {actorList.map((val, key) => {
                        // to show all the movie title
                        if (val.MovieID === ID) {
                          return (
                            <div className="col-sm-3">
                              <img className="rounded-circle" src={val.ActorImageLink} Height="150px" width="150px" alt="Data not found!"></img>
                              <p>{val.ActorName}</p>
                            </div>
                          );
                        }
                      })}
                      </div>
                    </Row>
                  </Col>
                </Row>
              </div>
            );
          }
        })}
      </Container>
    </div>
  );
}

export default Moviepage;
