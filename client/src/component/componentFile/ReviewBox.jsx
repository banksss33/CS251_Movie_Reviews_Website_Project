import Row from "react-bootstrap/Row";
import React, { useEffect, useState } from "react";
import "../style/reviewbox.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const ReviewBox = () => {
  const [reviewScore, setReviewScore] = useState(0);

  const handleRangeChange = (event) => {
    setReviewScore(event.target.value); // Update the review score state with the selected value
  };

  const handleStarClick = (value) => {
    // If the clicked value is the same as the current review score, set it to half
    if (value === reviewScore) {
      setReviewScore(value - 0.5);
    } else {
      setReviewScore(value); // Otherwise, set it to the clicked value
    }
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

          <div className="col-sm-4 d-flex-end">
            <div className="star-rating">
              <input
                className="range-slider"
                type="range"
                min="0"
                max="5"
                step="0.5"
                value={reviewScore}
                onChange={handleRangeChange}
                disabled // Disable the range input
                style={{ display: "none" }} // Hide the range input
              />
              <div className="star-rating-icons">
                {[...Array(11)].map((_, i) => {
                  const value = i * 0.5;
                  return (
                    <label key={i} htmlFor={`range-${i}`}>
                      <input
                        type="radio"
                        id={`range-${i}`}
                        name="rating"
                        value={value}
                        checked={
                          reviewScore === value || reviewScore === value - 0.5
                        }
                        onChange={() => handleStarClick(value)}
                        disabled // Disable the radio button
                        style={{ display: "none" }} // Hide the radio button
                      />
                      <img
                        src="https://purepng.com/public/uploads/medium/purepng.com-popcornpopcorncorndent-cornflint-corn-1411528650886qv75w.png"
                        alt={`${value} stars`}
                        onClick={() => handleStarClick(value)}
                        onMouseEnter={() => setReviewScore(value)}
                        onMouseLeave={() => setReviewScore(reviewScore)}
                      />
                    </label>
                  );
                })}
              </div>
              <h3>{reviewScore}</h3>
            </div>
          </div>
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
