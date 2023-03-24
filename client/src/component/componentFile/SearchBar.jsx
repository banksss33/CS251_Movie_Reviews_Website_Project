
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/SearchBar.css"
import Form from 'react-bootstrap/Form';

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
        <div> 
            <Form.Control aria-label="Text input with dropdown button" type="text" value={searchTerm} placeholder="Search" onChange={onchange} />          
            {/* Data results */}
            <div className="dropdownSearch">
              {/* filter for search */}
                {movieList.filter((val) => {

                  const search = searchTerm.toLowerCase();
                  const name = val.Title.toLowerCase();

                  return search && name.startsWith(search);
                }).map((val, key) => {
                  // to show all the movie title
                    return (
                          <div key={key}>
                            <a onClick={() => setSearchTerm(val.Title)}>
                              {val.Title}
                            </a>
                          </div>            
                    )
                })}
            </div>
        </div>
    );
  }
  
  export default SearchBar;
  