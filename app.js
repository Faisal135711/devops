var express = require('express');
var mongoose = require("mongoose");

var user = require("./user");

require("dotenv").config()

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("db connected successfully");
    } catch(error) {
        console.log(error)
    }
}

connectDB();

var app = express();

app.use('/', (req, res) => res.send("Hello from Node API"));
app.post("/user", async (req, res) => {
    try {
        const { name, email } = req.body;

        const newUser = await user.create({ name, email });

        return res.status(201).json({
            message: "User created",
            user: newUser
        });
    } catch (error) {
        res.error(error)
    }
})

app.listen(process.env.PORT, () => console.log("Server is running on ", process.env.PORT));

module.exports = app;
