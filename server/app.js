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

app.get("/MovieCardDefault", (req, res) => {
  db.query("SELECT ImageLink, Title FROM movie;", (err, result) => {
    if (err) {
      console.log(err + "select movie card error");
    } else {
      res.send(result);
    }
  });
});

app.get("/Moviepage", (req, res) => {
  db.query("SELECT * FROM movie;", (err, result) => {
    if (err) {
      console.log(err + "select movie list error");
    } else {
      res.send(result);
    }
  });
});

app.get("/getDirector", (req, res) => {
  db.query(
    "SELECT * FROM movie JOIN directed JOIN director WHERE movie.MovieID=directed.MovieID AND director.DirectorID=directed.DirectorID;",
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
    "SELECT * FROM movie JOIN cast JOIN actor WHERE movie.MovieID=cast.MovieID AND actor.ActorID=cast.ActorID;",
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
    "SELECT * FROM review JOIN movie JOIN account JOIN profile WHERE movie.MovieID=review.MovieID AND account.UserID=review.UserID AND account.UserID=profile.UserID;",
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





// account

app.get("/registerValid", (req, res) => {
  db.query("SELECT Username, Email, Nickname FROM profile JOIN account WHERE account.UserID=profile.UserID;", (err, result) => {
    if (err) {
      console.log(err + "select profile error");
    } else {
      res.send(result);
    }
  });
});

app.get("/signIn", (req, res) => {
  db.query("SELECT * FROM profile JOIN account WHERE account.UserID=profile.UserID;", (err, result) => {
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
