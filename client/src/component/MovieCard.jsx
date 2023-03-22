// ShowCarousel.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import styles from "./MovieCard.css";

const MovieCard = ({ showFrom }) => {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    const cardData = () => {
      axios.get(`http://localhost:3001/${showFrom}`).then((response) => {
        setItems(response.data);
      });
    };

    cardData();
  }, []);

  return (
    <>
      {Items.map((item) => (
        <Card
          className={`bg-dark text-white ${styles.card}`}
          key={item.MovieID}
        >
          <Card.Img src={item.ImageLink} alt="No Image found" />
          <Card.ImgOverlay className={styles.cardImgOverlay}>
            <Card.Title>{item.Title}</Card.Title>
            <Card.Text>{item.Description}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      ))}
    </>
  );
};

export default MovieCard;
