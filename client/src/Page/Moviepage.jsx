import "../component/style/Carousel.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Moviepage() {
  const [movieList, setmovieList] = useState([]);
  const [directorList, setdirectorList] = useState([]);
  const [actorList, setactorList] = useState([]);

  useEffect(() => {
    const getmovie = () => {
      axios.get("http://localhost:3001/ctList").then((response) => {
        setmovieList(response.data);
      });
    };

    const getdirector = () => {
      axios.get("http://localhost:3001/getDirector").then((response) => {
        setdirectorList(response.data);
      });
    };

    const getactor = () => {
      axios.get("http://localhost:3001/getActor").then((response) => {
        setactorList(response.data);
      });
    };

    getmovie();
    getdirector();
    getactor();
  }, []);

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let ID = parseInt(useQuery().get("ID"));
  return (
    <>
      {/* filter for search */}
      {movieList.map((val) => {
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

      {directorList.map((val, key) => {
        // to show all the movie title
        if (val.MovieID === ID) {
          return (
            <div>
              <p>{val.DirectorName}</p>
            </div>
          );
        }
      })}

      {actorList.map((val, key) => {
        // to show all the movie title
        if (val.MovieID === ID) {
          return (
            <div>
              <p>{val.ActorName}</p>
            </div>
          );
        }
      })}
    </>
  );
}

export default Moviepage;
