const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  database: "cornmetersystem",
});

app.get("/ctList", (req, res) => {
  db.query("SELECT * FROM movie LIMIT 5",
  (err, result) => {
    if (err) {
      console.log(err + "select movie error");
    } else {
      res.send(result);
    }
  });
});

app.get("/MovieCardDefault", (req, res) => {
  db.query("SELECT ImageLink, Title FROM movie;",
  (err, result) => {
    if (err) {
      console.log(err + "select movie card error");
    } else {
      res.send(result);
    }
  });
});

app.get("/getDirector", (req, res) => {
  db.query(
    "SELECT * FROM movie JOIN directed ON movie.MovieID = directed.MovieID JOIN director ON director.DirectorID = directed.DirectorID;",
    (err, result) => {
      if (err) {
        console.log(err + "select movie list error");
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/getActor", (req, res) => {
  db.query(
    "SELECT * FROM movie JOIN cast ON movie.MovieID = cast.MovieID JOIN actor ON actor.ActorID = cast.ActorID;",
    (err, result) => {
      if (err) {
        console.log(err + "select movie list error");
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/getReview", (req, res) => {
  db.query(
    "SELECT * FROM review JOIN movie ON movie.MovieID = review.MovieID JOIN account ON account.UserID = review.UserID JOIN profile ON account.UserID = profile.UserID;",
    (err, result) => {
      if (err) {
        console.log(err + "select movie list error");
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/NewMovie", (req, res) => {
  db.query("SELECT * FROM movie ORDER BY Year DESC LIMIT 5;",
  (err, result) => {
    if (err) {
      console.log(err + "select new movie error");
    } else {
      res.send(result);
    }
  });
});

app.get("/RandMovie", (req, res) => {
  db.query("SELECT * FROM movie ORDER BY RAND() LIMIT 5;",
  (err, result) => {
    if (err) {
      console.log(err + "random movie error");
    } else {
      res.send(result);
    }
  });
});



// sort genres for movie page
app.get("/Action", (req, res) => {
  db.query("SELECT * FROM movie JOIN classify ON movie.MovieID = classify.MovieID JOIN genres ON genres.GenreID = classify.GenreID WHERE genres.genre = 'Action';",
  (err, result) => {
    if (err) {
      console.log(err + "sort genre list error");
    } else {
      res.send(result);
    }
  });
});

app.get("/Adventure", (req, res) => {
  db.query("SELECT * FROM movie JOIN classify ON movie.MovieID = classify.MovieID JOIN genres ON genres.GenreID = classify.GenreID WHERE genres.genre = 'Adventure';",
  (err, result) => {
    if (err) {
      console.log(err + "sort genre list error");
    } else {
      res.send(result);
    }
  });
});

app.get("/Biography", (req, res) => {
  db.query("SELECT * FROM movie JOIN classify ON movie.MovieID = classify.MovieID JOIN genres ON genres.GenreID = classify.GenreID WHERE genres.genre = 'Biography';",
  (err, result) => {
    if (err) {
      console.log(err + "sort genre list error");
    } else {
      res.send(result);
    }
  });
});

app.get("/Crime", (req, res) => {
  db.query("SELECT * FROM movie JOIN classify ON movie.MovieID = classify.MovieID JOIN genres ON genres.GenreID = classify.GenreID WHERE genres.genre = 'Crime';",
  (err, result) => {
    if (err) {
      console.log(err + "sort genre list error");
    } else {
      res.send(result);
    }
  });
});

app.get("/Drama", (req, res) => {
  db.query("SELECT * FROM movie JOIN classify ON movie.MovieID = classify.MovieID JOIN genres ON genres.GenreID = classify.GenreID WHERE genres.genre = 'Drama';",
  (err, result) => {
    if (err) {
      console.log(err + "sort genre list error");
    } else {
      res.send(result);
    }
  });
});

app.get("/Family", (req, res) => {
  db.query("SELECT * FROM movie JOIN classify ON movie.MovieID = classify.MovieID JOIN genres ON genres.GenreID = classify.GenreID WHERE genres.genre = 'Family';",
  (err, result) => {
    if (err) {
      console.log(err + "sort genre list error");
    } else {
      res.send(result);
    }
  });
});

app.get("/Fantasy", (req, res) => {
  db.query("SELECT * FROM movie JOIN classify ON movie.MovieID = classify.MovieID JOIN genres ON genres.GenreID = classify.GenreID WHERE genres.genre = 'Fantasy';",
  (err, result) => {
    if (err) {
      console.log(err + "sort genre list error");
    } else {
      res.send(result);
    }
  });
});

app.get("/History", (req, res) => {
  db.query("SELECT * FROM movie JOIN classify ON movie.MovieID = classify.MovieID JOIN genres ON genres.GenreID = classify.GenreID WHERE genres.genre = 'History';",
  (err, result) => {
    if (err) {
      console.log(err + "sort genre list error");
    } else {
      res.send(result);
    }
  });
});

app.get("/Mystery", (req, res) => {
  db.query("SELECT * FROM movie JOIN classify ON movie.MovieID = classify.MovieID JOIN genres ON genres.GenreID = classify.GenreID WHERE genres.genre = 'Mystery';",
  (err, result) => {
    if (err) {
      console.log(err + "sort genre list error");
    } else {
      res.send(result);
    }
  });
});

app.get("/Romance", (req, res) => {
  db.query("SELECT * FROM movie JOIN classify ON movie.MovieID = classify.MovieID JOIN genres ON genres.GenreID = classify.GenreID WHERE genres.genre = 'Romance';",
  (err, result) => {
    if (err) {
      console.log(err + "sort genre list error");
    } else {
      res.send(result);
    }
  });
});

app.get("/Sci-Fi", (req, res) => {
  db.query("SELECT * FROM movie JOIN classify ON movie.MovieID = classify.MovieID JOIN genres ON genres.GenreID = classify.GenreID WHERE genres.genre = 'Sci-Fi';",
  (err, result) => {
    if (err) {
      console.log(err + "sort genre list error");
    } else {
      res.send(result);
    }
  });
});

app.get("/thriller", (req, res) => {
  db.query("SELECT * FROM movie JOIN classify ON movie.MovieID = classify.MovieID JOIN genres ON genres.GenreID = classify.GenreID WHERE genres.genre = 'thriller';",
  (err, result) => {
    if (err) {
      console.log(err + "sort genre list error");
    } else {
      res.send(result);
    }
  });
});

app.get("/War", (req, res) => {
  db.query("SELECT * FROM movie JOIN classify ON movie.MovieID = classify.MovieID JOIN genres ON genres.GenreID = classify.GenreID WHERE genres.genre = 'War';",
  (err, result) => {
    if (err) {
      console.log(err + "sort genre list error");
    } else {
      res.send(result);
    }
  });
});

app.get("/Western", (req, res) => {
  db.query("SELECT * FROM movie JOIN classify ON movie.MovieID = classify.MovieID JOIN genres ON genres.GenreID = classify.GenreID WHERE genres.genre = 'Western';",
  (err, result) => {
    if (err) {
      console.log(err + "sort genre list error");
    } else {
      res.send(result);
    }
  });
});


// sorting for movie page

app.get("/Moviepage", (req, res) => {
  db.query("SELECT * FROM movie;",
  (err, result) => {
    if (err) {
      console.log(err + "select movie list error");
    } else {
      res.send(result);
    }
  });
});

app.get("/sortByNewestYear", (req, res) => {
  db.query("SELECT * FROM movie ORDER BY movie.Year DESC;",
  (err, result) => {
    if (err) {
      console.log(err + "sort movie error");
    } else {
      res.send(result);
    }
  });
});

app.get("/sortByOldestYear", (req, res) => {
  db.query("SELECT * FROM movie ORDER BY movie.Year ASC;",
  (err, result) => {
    if (err) {
      console.log(err + "sort movie error");
    } else {
      res.send(result);
    }
  });
});


// account

app.get("/registerValid", (req, res) => {
  db.query("SELECT Username, Email, Nickname FROM profile JOIN account ON account.UserID = profile.UserID;"
  , (err, result) => {
    if (err) {
      console.log(err + "select profile error");
    } else {
      res.send(result);
    }
  });
});

app.get("/signIn", (req, res) => {
  db.query("SELECT * FROM profile JOIN account ON account.UserID = profile.UserID;",
  (err, result) => {
    if (err) {
      console.log(err + "select sign in error");
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("server running on port 3001");
});




// sort

app.post('/superSort', (req, res) => {
  const { genre, sort } = req.body;
  
  // Use genre and sort in your database query
  db.query("SELECT * FROM movie JOIN classify ON movie.MovieID = classify.MovieID JOIN genres ON genres.GenreID = classify.GenreID WHERE genres.genre = ?;", [genre],
    (err, result) => {
      if (err) {
        console.log(err + "sort movie error");
        // Send error response
        res.status(500).send('Internal Server Error');
      } else {
        // Send success response with query result
        res.send(result);
      }
    });
});
