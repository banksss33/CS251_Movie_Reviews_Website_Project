
import React, { useEffect, useState } from "react";
import axios from "axios";

function SearchBar() {

    const [movieList, setmovieList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
      const getmovie = () => {
        axios.get("http://localhost:3001/MovieListforSearch").then((response) => {
          setmovieList(response.data);
        });
      };
  
      getmovie();
    }, []);

    return (
        <div>
            <input type="text" placeholder="Search" onChange={event => {setSearchTerm(event.target.value)}}/>
            {movieList.filter((val) => {
              if (searchTerm == "") {
                return val
              } else if (val.Title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
              }
            }).map((val, key) => {
                return (
                    <div className="movieTitle" key={key}>
                        <p>{val.Title}</p>
                    </div>
                )
            })}
        </div>
    );
  }
  
  export default SearchBar;
  