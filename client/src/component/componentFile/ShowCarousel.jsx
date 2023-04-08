// ShowCarousel.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

function ShowCarousel({ showFrom }) {
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
    <Carousel>
      {items.map((item) => (
        <Carousel.Item key={item.MovieID}>
          <div
            className="embed-responsive embed-responsive-16by9 d-block w-100"
            style={{ height: "100vh", position: "relative" }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/aWzlQ2N6qqg?controls=0&autoplay=1&mute=1&loop=1&playlist=aWzlQ2N6qqg&modestbranding=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <Link
              to={`/Moviepage/${item.MovieID}`}
              style={{
                textDecoration: "none",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </div>
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
