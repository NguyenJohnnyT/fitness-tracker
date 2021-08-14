const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const db = require("./models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/exercise', async (req, res) => {
    try {
        // console.log(req);
        const response = await db.Workout.find({})
        console.log(response);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json(err);
    }
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });