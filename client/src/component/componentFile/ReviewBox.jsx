import Row from "react-bootstrap/Row";
import React, { useEffect, useState } from "react";
import "../style/reviewbox.css";
import Popcorn from "./popcornRate";
import axios from "axios";
import Swal from 'sweetalert2'

const ReviewBox = ({movieID}) => {

  // infor send to app.js for rating
  const [mid, setmid] = useState(0);
  const [nickname, setNickname] = useState("");
  const [reviewScore, setReviewScore] = useState(0);
  const [reviewBox, setReviewBox] = useState("");

  useEffect(() => {
    const getmid = () => {
      setmid(movieID);
    };

    const getNickname = () => {
      setNickname(localStorage.getItem("yourName"));
    };    

    getmid();
    getNickname();
  }, []);

  const handleReviewComment = (event) => {
    setReviewBox(event.target.value);
  };

  const handleRangeChange = (event) => {
    setReviewScore(event.target.value);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const successReviewAlert = () => {
    Swal.fire({
      title: 'Successfully',
      text: 'Thank you for your rating',
      icon: 'success',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        handleRefresh();
      }
    });
  };
  

  const sendReview  = async (e) => {
    e.preventDefault();
    try {
      // Call rating API with form data
      const response = await axios.post("http://localhost:3001/rateMovie", {
        sending: { mid, nickname, reviewScore, reviewBox },
      });

      // Handle successful rating
      console.log(response.data);
      successReviewAlert();
    } catch (error) {
      // Handle rating error
      console.log(error.response.data);
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
