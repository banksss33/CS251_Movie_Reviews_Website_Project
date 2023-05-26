import "../component/style/Carousel.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReviewBox from "../component/componentFile/ReviewBox";
import "../component/style/MoviePage.css"
import ShowReview from "../component/componentFile/ShowReview";
import PopcornCoinRate from "../component/componentFile/PopcornCoinRate";

//import from Cloudinary
import { Cloudinary } from "@cloudinary/url-gen/instance/Cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

//Cloudinary instance
const cld = new Cloudinary({
  cloud: {
    cloudName: "drn8zqbqe",
  },
});

function Moviepage() {
  const [movieList, setmovieList] = useState([]);
  const [directorList, setdirectorList] = useState([]);
  const [actorList, setactorList] = useState([]);
  const [avgScoreList, setAvgScoreList] = useState([]);

  useEffect(() => {
    const getmovie = () => {
      axios.get("http://localhost:3001/getMovie").then((response) => {
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

    const getAvgScore = () => {
      axios.get("http://localhost:3001/averageScore").then((response) => {
        setAvgScoreList(response.data);
      });
    };

    getmovie();
    getdirector();
    getactor();
    getAvgScore();
  }, []);

  let Param = useParams();
  let ID = parseInt(Param.ID);
  return (
    <body className="body d-flex">
      <Container>
        {avgScoreList.map((val) => {
          if (val.MovieID === ID) {
            return (
              <div className="d-flex flex-row-reverse text-end">
                <PopcornCoinRate score={val.average_score}/>
                <h1 className="d-inline p-2 mb-4 text-white border-end border-warning border-4">
                  {val.average_score.toFixed(1)}
                </h1>
                <h5><br/>Average score :</h5>
              </div>
              
            )
          }
        })}
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
                    className="col-sm-7 fs-20"
                  >
                    <Row className="mb-3">
                      <p>{val.Description}</p>
                    </Row>
                    <Row className="mb-3">
                      <div className="d-flex">
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
                      <Row>
                        <p className="col-sm-2 ps-3  border-start border-warning border-4">
                          <strong>Stars</strong>
                        </p>
                        {actorList.map((val, key) => {
                          //set image resolution and focus it on face
                          const showImageURL = cld
                            .image(val.ActorImageLink)
                            .resize(
                              fill()
                                .width(350)
                                .height(350)
                                .gravity(focusOn(FocusOn.face()))
                            )
                            .setDeliveryType("fetch")
                            .toURL();

                          // to show all the movie title
                          if (val.MovieID === ID) {
                            return (
                              <Col sm={3}>
                                <img className="rounded-circle img-actor"
                                  src={showImageURL}
                                />
                                <p>{val.ActorName}</p>
                              </Col>
                            );
                          }
                        })}
                      </Row>
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

                {/* Review box */}
                <ShowReview showFrom="getReview"/>

                {/* rating your own */}
                {localStorage.getItem("yourName") === "" ? (
                  <div
                    className="p-3 rounded-4 mt-5"
                    style={{
                      background: "#679267",
                    }}
                  >
                    <h3>Only member can Rate Score</h3>
                  </div>
                ) : (
                  <ReviewBox movieID={ID}/>
                )}
              </Container>
            );
          }
        })}
      </Container>
    </body>
  );
}

export default Moviepage;
