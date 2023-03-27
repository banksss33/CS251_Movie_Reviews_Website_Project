const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
   database: "moviecard",
  // database: "cornmetersystem",
});

app.get("/ctList", (req, res) => {
  db.query("SELECT * FROM movie", (err, result) => {
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

app.get("/MovieListforSearch", (req, res) => {
  db.query("SELECT Title FROM movie;", (err, result) => {
    if (err) {
      console.log(err + "select movie list error");
    } else {
      res.send(result);
    }
  });
});

app.get("/Moviepage", (req, res) => {
  db.query(
    "SELECT * FROM movie;",
    (err, result) => {
      if (err) {
        console.log(err + "select movie list error");
      } else {
        res.send(result);
      }
    }
  );
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

app.listen(3001, () => {
  console.log("server running on port 3001");
});
