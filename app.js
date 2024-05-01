var express = require('express');

var app = express();

app.use('/', (req, res) => res.send("Hello from Node API"));

app.listen(5000, () => console.log("Server is running"));

module.exports = app;
