import "../component/style/Carousel.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Moviepage() {
  const [movieList, setmovieList] = useState([]);
  const [directorList, setdirectorList] = useState([]);
  const [actorList, setactorList] = useState([]);
  const [reviewList, setreviewList] = useState([]);

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

    const getreview = () => {
      axios.get("http://localhost:3001/getReview").then((response) => {
        setreviewList(response.data);
      });
    };

    getmovie();
    getdirector();
    getactor();
    getreview();
  }, []);

  let Param = useParams();
  let ID = parseInt(Param.ID);
  return (
    <div
      style={{
        backgroundColor: "#51484f",
        padding: "100px 125px",
        color: "#fff",
      }}
      className="d-flex"
    >
      <Container>
        {movieList.map((val) => {
          // to show all the movie title
          if (val.MovieID === ID) {
            return (
              <Container>
                <Row>
                  <span className="d-inline p-2 mb-4 text-white border-start border-warning border-4">
                    <h1>
                      <strong>{val.Title}</strong>
                    </h1>
                  </span>
                  <br />
                  <br />
                  <br />
                  <br />
                </Row>
                <Row>
                  <Col className="col-sm-5">
                    <img
                      class="img-fluid"
                      src={val.ImageLink}
                      alt="Data not found!"
                      style={{ maxHeight: "700px" }}
                    />
                  </Col>
                  <Col
                    className="col-sm-7"
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    <Row className="mb-3">
                      <p>{val.Description}</p>
                    </Row>
                    <Row className="mb-3">
                      <div style={{ display: "flex" }}>
                        <p className="col-sm-2 ps-3  border-start border-warning border-4">
                          <strong>Director</strong>
                        </p>
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
                      <div style={{ display: "flex" }}>
                        <p className="col-sm-2 ps-3  border-start border-warning border-4">
                          <strong>Stars</strong>
                        </p>
                        {actorList.map((val, key) => {
                          // to show all the movie title
                          if (val.MovieID === ID) {
                            return (
                              <div className="col-sm-3">
                                <img
                                  className="rounded-circle"
                                  src={val.ActorImageLink}
                                  Height="150px"
                                  width="150px"
                                  alt="Data not found!"
                                ></img>
                                <p>{val.ActorName}</p>
                              </div>
                            );
                          }
                        })}
                      </div>
                    </Row>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <span className="d-inline p-2 mb-4 text-white border-start border-warning border-4">
                    <h2>
                      <strong>Review</strong>
                    </h2>
                  </span>
                </Row>
                <br/><br/><br/><br/>
                <div>
                  {reviewList.map((val, key) => {
                    // to show all the movie title
                    if (val.MovieID === ID) {
                      return (
                        <div className="p-3 rounded-4" style={{
                          background: "#679267",
                        }}>
                          <Row>
                            <div className="col-sm-8 ps-5">
                              <p>{val.Nickname}</p>
                              <p>{val.Date}</p>
                            </div>

                            <div className="col-sm-4" style={{
                              display: "flex",
                              justifyContent: "right"
                            }}>

                              <p className="p-3">{val.Score}</p>
                              <img className="p-3" src="#" alt="popcorn"/>
                            </div>
                          </Row>
                          <hr/>
                          <Row>
                            <div style={{
                              display: "flex",
                              justifyContent: "center",
                              minHeight: "100px"
                            }}>
                              <p>{val.review}</p>
                            </div>
                          </Row>
                        </div>
                      );
                    }
                  })}
                </div>
              </Container>
            );
          }
        })}
      </Container>
    </div>
  );
}

export default Moviepage;
