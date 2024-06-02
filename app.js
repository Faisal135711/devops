var express = require("express");
var cors = require("cors");

var app = express();

app.use(cors());
app.use(express.json());

app.get("/api/", (req, res) => res.send("Hello from JENKINS, AWS, DOCKER!!!"));

const PORT = 3000;

app.listen(PORT, () => console.log("Server is running on port: ", PORT));

module.exports = app;
