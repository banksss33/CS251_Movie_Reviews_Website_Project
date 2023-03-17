const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("haha");
})

app.listen(5000, () => {
    console.log('server running on port 5000')
})