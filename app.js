var express = require('express');

var app = express();

app.use('/', (req, res) => res.send("Hello from Node API"));

module.exports = app;
