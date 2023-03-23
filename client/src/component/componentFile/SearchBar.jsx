
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/SearchBar.css"

function SearchBar() {
    
    const [movieList, setmovieList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const onchange = event => {setSearchTerm(event.target.value)}

    useEffect(() => {
      const getmovie = () => {
        axios.get("http://localhost:3001/MovieListforSearch").then((response) => {
          setmovieList(response.data);
        });
      };
  
      getmovie();
    }, []);

    return (
        <div className="search">
            <div className="search-container">
              <div className="search-inner">
                <input type="text" value={searchTerm} placeholder="Search" onChange={onchange}/>
              </div>
            </div>
            

            {/* Data results */}
            <div className="dropdownSearch">
              {/* filter for search */}
                {movieList.filter((val) => {
                  // if (val.Title.toLowerCase().includes(searchTerm.toLowerCase())) {
                  //   return val
                  // }
                  const search = searchTerm.toLowerCase();
                  const name = val.Title.toLowerCase();

                  return search && name.startsWith(search);
                }).map((val, key) => {
                  // to show all the movie title
                    return (
                        <div className="dropdown-row" key={key}>
                            <p className="dataItem">{val.Title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
  }
  
  export default SearchBar;
  