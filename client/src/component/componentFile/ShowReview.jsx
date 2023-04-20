import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";

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
                              <h5>{val.Nickname}</h5>
                              <p>{val.Date}</p>
                            </div>

                            <div
                              className="col-sm-4"
                              style={{
                                display: "flex",
                                justifyContent: "right",
                              }}
                            >
                              <p className="p-3">{val.Score}</p>
                              <img className="p-3" src="#" alt="popcorn" />
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
                              <p>{val.review}</p>
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