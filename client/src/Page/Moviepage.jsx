import "../component/style/Carousel.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Moviepage({ ID }) {
  const [movieList, setmovieList] = useState([]);

  useEffect(() => {
    const getmovie = () => {
      axios.get("http://localhost:3001/Moviepage").then((response) => {
        setmovieList(response.data);
      });
    };

    getmovie();
  }, []);

  return (
    <div>
      {/* filter for search */}
      {movieList.map((val, key) => {
        // to show all the movie title
        if (val.MovieID === ID) {
          return (
            <div>
              <h1>{val.Title}</h1>
              <img src={val.ImageLink} alt="Data not found!" />
              <p>{val.Description}</p>
              <p>{val.DirectorName}</p>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Moviepage;
