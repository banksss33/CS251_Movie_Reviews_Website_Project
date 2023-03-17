const express = require('express');

const app = express();

const mysql = require('mysql');

const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "123456789",
    database: "cornmetersystem"
})

app.get('/haha', (req, res) => {
    res.send("haha");
})

app.get('/showmember', (req, res) => {
    db.query("SELECT * FROM account", (err, result) => {
        if (err) {
            console.log(err + "select account error");
        } else {
            res.send(result);
        }
    })
})

app.listen(3001, () => {
    console.log('server running on port 3001')
})