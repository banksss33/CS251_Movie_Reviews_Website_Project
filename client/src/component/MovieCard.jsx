import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./MovieCard.css";

const MovieCard = (props) => {
  return (
    <Card className={`bg-dark text-white ${styles.card}`}>
      <Card.Img src={props.Img} alt="No Image found" />
      <Card.ImgOverlay className={styles.cardImgOverlay}>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default MovieCard;
