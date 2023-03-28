// ShowCarousel.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import styles from "../style/MovieCard.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const MovieCard = ({ col, row, showFrom }) => {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    const cardData = () => {
      axios.get(`http://localhost:3001/${showFrom}`).then((response) => {
        setItems(response.data);
      });
    };

    cardData();
  }, [showFrom]);

  const renderMovies = () => {
    let movieRows = [];
    for (let i = 0; i < Items.length; i += col) {
      let movieRow = [];
      for (let j = i; j < i + col; j++) {
        if (Items[j]) {
          movieRow.push(
            <Col md={12 / col} key={Items[j].MovieID}>
              <Card className={`bg-dark text-white ${styles.card}`}>
                <Card.Img src={Items[j].ImageLink} alt="No Image found" />
                <Link to={"/Moviepage/".concat(Items[j].MovieID)}>
                  <Card.ImgOverlay className={styles.cardImgOverlay}>
                    <Card.Title className="text-light bg-secondary opacity-75 rounded-3">
                      {Items[j].Title}
                    </Card.Title>
                  </Card.ImgOverlay>
                </Link>
              </Card>
            </Col>
          );
        }
      }
      movieRows.push(<Row key={i}>{movieRow}</Row>);
    }
    return movieRows.slice(0, row);
  };

  return <>{renderMovies()}</>;
};

export default MovieCard;
