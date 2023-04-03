// ShowCarousel.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import styles from "../style/MovieCard.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const MovieCard = ({ col, showFrom }) => {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    const cardData = () => {
      axios.get(`http://localhost:3001/${showFrom}`).then((response) => {
        setItems(response.data);
      });
    };

    cardData();
  }, [showFrom]);

  return (
    <Row xs={col}>
      {Items.map((item) => {
        return (
          <Col key={item.MovieID}>
            <Card>
              <Link to={"/Moviepage/".concat(item.MovieID)}>
                <img
                  style={{ height: "420px", width: "100%" }}
                  className="rounded"
                  src={item.ImageLink}
                />
              </Link>
            </Card>
            <p className="text-center text-white mt-2">{item.Title}</p>
          </Col>
        );
      })}
    </Row>
  );
};

export default MovieCard;
