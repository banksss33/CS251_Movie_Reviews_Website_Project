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
  db.query("SELECT * FROM movie LIMIT 5", (err, result) => {
    if (err) {
      console.log(err + "select movie error");
    } else {
      res.send(result);
    }
  });
});

app.get("/Moviepage", (req, res) => {
  db.query("SELECT * FROM movie", (err, result) => {
    if (err) {
      console.log(err + "select movie error");
    } else {
      res.send(result);
    }
  });
});

app.get("/getGenres", (req, res) => {
  db.query("SELECT * FROM genres", (err, result) => {
    if (err) {
      console.log(err + "select genres error");
    } else {
      res.send(result);
    }
  });
});

app.get("/MovieCardDefault", (req, res) => {
  db.query("SELECT MovieID, Title FROM movie;", (err, result) => {
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
  db.query("SELECT * FROM movie ORDER BY Year DESC LIMIT 5;", (err, result) => {
    if (err) {
      console.log(err + "select new movie error");
    } else {
      res.send(result);
    }
  });
});

app.get("/RandMovie", (req, res) => {
  db.query("SELECT * FROM movie ORDER BY RAND() LIMIT 5;", (err, result) => {
    if (err) {
      console.log(err + "random movie error");
    } else {
      res.send(result);
    }
  });
});

//Get from params
app.get("/getMovies", (req, res) => {
  const sort = req.query.sort;
  const genre = req.query.genre;

  switch (sort) {
    case "Newest":
      sortQuery = "ORDER BY movie.Year DESC";
      break;
    case "Oldest":
      sortQuery = "ORDER BY movie.Year ASC";
      break;
    default:
      sortQuery = "";
  }

  switch (genre) {
    case "All":
      var sql = `
    SELECT * FROM movie ${sortQuery} ;
    `;
      break;

    default:
      var sql = `
    SELECT * FROM movie 
    JOIN classify ON movie.MovieID = classify.MovieID 
    JOIN genres ON genres.GenreID = classify.GenreID 
    WHERE genres.genre = '${genre}' ${sortQuery} ;
    `;
  }

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err + "getMovies error");
    } else {
      res.send(result);
    }
  });
});

// account
app.get("/registerValid", (req, res) => {
  db.query(
    "SELECT Username, Email, Nickname FROM profile JOIN account ON account.UserID = profile.UserID;",
    (err, result) => {
      if (err) {
        console.log(err + "select profile error");
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/signIn", (req, res) => {
  db.query(
    "SELECT * FROM profile JOIN account ON account.UserID = profile.UserID;",
    (err, result) => {
      if (err) {
        console.log(err + "select sign in error");
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("server running on port 3001");
});
