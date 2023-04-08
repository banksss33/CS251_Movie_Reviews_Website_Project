import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "../style/MovieCard.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const MovieCard = ({ col, showFrom, selectedSort, selectedGenre }) => {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    const cardData = () => {
      axios
        .get(`http://localhost:3001/${showFrom}`, {
          params: {
            sort: selectedSort,
            genre: selectedGenre,
          },
        })
        .then((response) => {
          console.log("Fetched data:", response.data);
          setItems(response.data);
        });
    };

    cardData();
  }, [showFrom, selectedSort, selectedGenre]);

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
