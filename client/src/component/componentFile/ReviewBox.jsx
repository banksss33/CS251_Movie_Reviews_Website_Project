import Row from "react-bootstrap/Row";
import React, { useEffect, useState } from "react";
import "../style/reviewbox.css";
import Popcorn from "./popcornRate";
import axios from "axios";

const ReviewBox = ({movieID}) => {
  const [reviewScore, setReviewScore] = useState(0);
  const [reviewBox, setReviewBox] = useState("");

  const handleReviewComment = (event) => {
    setReviewBox(event.target.value);
  };

  const handleRangeChange = (event) => {
    setReviewScore(event.target.value);
  };
  
  const sendReview = () => {
    axios
      .post(`http://localhost:3001/rateMovie`, {
        params: {
          mid: movieID,
          nickName: localStorage.getItem("yourName"),
          Score: reviewScore,
          comment: reviewBox,
        },
      })
      .then((response) => {
        console.log("send data:", response.data);
      });
  };

  return (
      
    <div>
      {typeof movieID}
      <h3>Rate your opinion</h3>
      <div
        className="p-3 rounded-4"
        style={{
          background: "#679267",
        }}
      >
        <Row>
          <div className="ps-5">
            <h3>{localStorage.getItem("yourName")} {reviewScore}</h3>
            <div className="position-relative d-flex-right">
            <input
              style={{
                width: "225px",
                position: "absolute",
                zIndex: "1",
                opacity: "0",
              }}
              className=""
              type="range"
              min="0"
              max="5"
              step="0.5"
              value={reviewScore}
              onChange={handleRangeChange}
            />
            <div className="">
              <Popcorn popcorn={reviewScore} />
            </div>
          </div>
          </div>
          
        </Row>
        <hr />
        <Row>
          <div className="review-content">
            <textarea
              className="review-box"
              value={reviewBox}
              onChange={handleReviewComment}
            />
          </div>
        </Row>
        <div className="d-flex justify-content-center">
          <button className="p-2 px-5 m-3 btn btn-outline-light" onClick={sendReview}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewBox;
