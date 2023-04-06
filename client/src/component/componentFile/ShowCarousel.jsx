// ShowCarousel.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

function ShowCarousel({ showFrom, setshowText }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const movieData = () => {
      axios.get(`http://localhost:3001/${showFrom}`).then((response) => {
        setItems(response.data);
      });
    };

    movieData();
  }, []);

  return (
    <Carousel fade>
      {items.map((item) => (
        <Carousel.Item key={item.MovieID}>
          <Link to={"/Moviepage/".concat(item.MovieID)}>
            <img
              style={{ height: "660px" }}
              className="d-block w-100 rounded-5"
              src={item.ImageLink}
              alt="Data not found!"
            />
          </Link>
          <Carousel.Caption>
            <h3>{item.Title}</h3>
            <p>{item.Description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ShowCarousel;
