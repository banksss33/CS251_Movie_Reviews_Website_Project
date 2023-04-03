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

function updateImageLink(movieId, newImageUrl) {
  return new Promise((resolve, reject) => {
    const query = "UPDATE movie SET ImageLink=? WHERE MovieID=?";

    db.query(query, [newImageUrl, movieId], (error, results, fields) => {
      if (error) {
        console.error(
          `Error updating image link for MovieID ${movieId}: ${error.message}`
        );
        reject(error);
      } else {
        console.log(
          `Updated image link for MovieID ${movieId} to ${newImageUrl}`
        );
        resolve();
      }
    });
  });
}

module.exports = { updateImageLink };
