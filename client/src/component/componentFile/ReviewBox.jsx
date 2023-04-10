import Row from "react-bootstrap/Row";
import React, { useEffect, useState } from "react";
import "../style/reviewbox.css";
// import Stars from "../componentFile/Stars"
import Popcorn from "./popcornRate";
import { useParams } from "react-router-dom";
import axios from "axios";

const ReviewBox = () => {
  const [reviewScore, setReviewScore] = useState(0);

  const handleRangeChange = (event) => {
    setReviewScore(event.target.value);
  };

  return (
    <div>
      <h3>Rate your opinion</h3>
      <div
        className="p-3 rounded-4"
        style={{
          background: "#679267",
        }}
      >
        <Row>
          <div className="col-sm-8 ps-5">
            <h5>{localStorage.getItem("yourName")}</h5>
          </div>

          <div className="position-relative d-flex-right">
            <input
              style={{ width: "225px", position: "absolute", zIndex: "1", opacity: "0" }}
              className=""
              type="range"
              min="0"
              max="5"
              step="0.5"
              value={reviewScore}
              onChange={handleRangeChange}
            />
            <div className="">
              <Popcorn popcorn={reviewScore} reviews={20} />
            </div>
          </div>
          <h3>{reviewScore}</h3>
        </Row>
        <hr />
        <Row>
          <div className="review-content">
            <textarea className="review-box" />
          </div>
        </Row>
      </div>
    </div>
  );
};

export default ReviewBox;
