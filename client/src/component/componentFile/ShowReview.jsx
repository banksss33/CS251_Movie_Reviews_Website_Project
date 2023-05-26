import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import PopcornCoinRate from "./PopcornCoinRate";

function ShowReview({ showFrom }) {
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    const reviewsData = () => {
      axios.get(`http://localhost:3001/${showFrom}`).then((response) => {
        setReviewsList(response.data);
      });
    };

    reviewsData();
  }, []);

  let Param = useParams();
  let ID = parseInt(Param.ID);

  return (
    <Row className="mt-5 mb-5">
                  {reviewsList.map((val, key) => {
                    if (val.MovieID === ID) {
                      return (
                        <div
                          className="p-3 rounded-4 mb-3"
                          style={{
                            background: "#679267",
                          }}
                        >
                          <Row>
                            <div className="col-sm-8 ps-5">
                              <h4>{val.Nickname}</h4>
                              <p className="ps-3">{val.Date}</p>
                            </div>

                            <div
                              className="col-sm-4"
                              style={{
                                display: "flex",
                                justifyContent: "right",
                              }}
                            >
                              <p className="p-3 fs-4">{val.Score}</p>
                              <PopcornCoinRate score={val.Score}/>
                            </div>
                          </Row>
                          <hr />
                          <Row>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                minHeight: "100px",
                              }}
                            >
                              <p className="ps-5">{val.review}</p>
                            </div>
                          </Row>
                        </div>
                      );
                    }
                  })}
                </Row>
  );
}

export default ShowReview;