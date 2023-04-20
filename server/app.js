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

// ----------------------------------------------------------------------------------------------------

// IN navbar

// search bar
// maybe delte SELECT column MovieID in later
app.get("/search", (req, res) => {
  db.query(
    `
    SELECT MovieID, Title, ImageLink, Year 
    FROM movie
    `,
    (err, result) => {
      if (err) {
        console.log(err + "select movie error");
      } else {
        res.send(result);
      }
    }
  );
});

// search bar
app.get("/averageScore", (req, res) => {
  db.query(
    `
    SELECT movie.MovieID, AVG(Score) AS average_score, COUNT(Score) AS score_count
    FROM review
    JOIN movie ON movie.MovieID = review.MovieID
    GROUP BY movie.MovieID;

    `,
    (err, result) => {
      if (err) {
        console.log(err + "select movie error");
      } else {
        res.send(result);
      }
    }
  );
});

// ----------------------------------------------------------------------------------------------------

// carousel

// Just DEMO
// maybe delete in soon
app.get("/ctList", (req, res) => {
  db.query(
    `
    SELECT * 
    FROM movie 
    LIMIT 3
    `,
    (err, result) => {
      if (err) {
        console.log(err + "select movie error");
      } else {
        res.send(result);
      }
    }
  );
});

// select the newest movie for carousel
// maybe change MovieID to Title
app.get("/NewMovie", (req, res) => {
  db.query(
    `
    SELECT MovieID, Title, Description, VideoLink 
    FROM movie 
    ORDER BY Year DESC 
    LIMIT 3;`,
    (err, result) => {
      if (err) {
        console.log(err + "select new movie error");
      } else {
        res.send(result);
      }
    }
  );
});

// random 3 movie for carousel
// Maybe not use because of performance
// maybe change MovieID to Title
app.get("/RandMovie", (req, res) => {
  db.query(
    `
    SELECT MovieID, Title, Description, VideoLink 
    FROM movie 
    ORDER BY RAND() 
    LIMIT 3;
    `,
    (err, result) => {
      if (err) {
        console.log(err + "random movie error");
      } else {
        res.send(result);
      }
    }
  );
});

// select popular movie for carousel
// not yet
app.get("/PopularMovie", (req, res) => {
  db.query(
    `
    // cuminng soon
    `,
    (err, result) => {
      if (err) {
        console.log(err + "select pop movie error");
      } else {
        res.send(result);
      }
    }
  );
});

// ----------------------------------------------------------------------------------------------------

// IN Movie page

// getmovie
// maybe change MovieID to Title
app.get("/getMovie", (req, res) => {
  db.query(
    `
    SELECT MovieID, Year, Title, Description, ImageLink, Rate 
    FROM movie
    `,
    (err, result) => {
      if (err) {
        console.log(err + "select movie error");
      } else {
        res.send(result);
      }
    }
  );
});

// get director
// maybe change movie.MovieID to Title
app.get("/getDirector", (req, res) => {
  db.query(
    `
    SELECT movie.MovieID, DirectorName 
    FROM movie 
    JOIN directed ON movie.MovieID = directed.MovieID 
    JOIN director ON director.DirectorID = directed.DirectorID;
    `,
    (err, result) => {
      if (err) {
        console.log(err + "select movie list error");
      } else {
        res.send(result);
      }
    }
  );
});

// get actor
// maybe change movie.MovieID to Title
app.get("/getActor", (req, res) => {
  db.query(
    `
    SELECT movie.MovieID, ActorName, ActorImageLink 
    FROM movie 
    JOIN cast ON movie.MovieID = cast.MovieID 
    JOIN actor ON actor.ActorID = cast.ActorID;
    `,
    (err, result) => {
      if (err) {
        console.log(err + "select movie list error");
      } else {
        res.send(result);
      }
    }
  );
});

// get review
// maybe change movie.MovieID to Title
app.get("/getReview", (req, res) => {
  db.query(
    `
    SELECT movie.MovieID, Nickname, Date, Score, review 
    FROM review 
    JOIN movie ON movie.MovieID = review.MovieID 
    JOIN account ON account.UserID = review.UserID 
    JOIN profile ON account.UserID = profile.UserID;
    `,
    (err, result) => {
      if (err) {
        console.log(err + "select movie list error");
      } else {
        res.send(result);
      }
    }
  );
});


// send review
app.post("/rateMovie", (req, res) => {
  const mid = req.body.mid;
  const nickName = req.body.nickName;
  const Score = req.body.Score;
  const review = req.body.comment;
  db.query(
    `
    INSERT INTO review (MovieID, UserID, Score, review, Date)
    VALUES (?, (SELECT profile.UserID FROM profile WHERE profile.Nickname = ?), ?, ?, NOW());
    `,
    [mid, nickName, Score, review],
    (err, result) => {
      if (err) {
        console.log(err + "send review rating error" + mid + nickName + Score + review);
      } else {
        res.send(result);
      }
    }
  );
});

// ----------------------------------------------------------------------------------------------------

// IN sign in page

// register validataion
// check if already had these Username, Email, Nickname in database
app.get("/registerValid", (req, res) => {
  db.query(
    `
    SELECT username, Email, Nickname 
    FROM profile 
    JOIN account ON account.UserID = profile.UserID;
    `,
    (err, result) => {
      if (err) {
        console.log(err + "select profile error");
      } else {
        res.send(result);
      }
    }
  );
});

// sign in validataion
// For login in to system
app.get("/signIn", (req, res) => {
  db.query(
    `
    SELECT Nickname, username, password 
    FROM profile 
    JOIN account ON account.UserID = profile.UserID;
    `,
    (err, result) => {
      if (err) {
        console.log(err + "select sign in error");
      } else {
        res.send(result);
      }
    }
  );
});

// ----------------------------------------------------------------------------------------------------

// IN Showall page

// get genre for selecting
app.get("/getGenres", (req, res) => {
  db.query(`SELECT Genre FROM genres`, (err, result) => {
    if (err) {
      console.log(err + "select genres error");
    } else {
      res.send(result);
    }
  });
});

// sorting and genre

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

  // maybe change MovieID to Title
  switch (genre) {
    case "All":
      var sql = `
    SELECT MovieID, Title, ImageLink FROM movie ${sortQuery} ;
    `;
      break;

    default:
      var sql = `
    SELECT movie.MovieID, Title, ImageLink FROM movie 
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

// ----------------------------------------------------------------------------------------------------

app.listen(3001, () => {
  console.log("server running on port 3001");
});
