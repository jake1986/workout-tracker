const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://Workout-Tracker:R$CV3WJXmxsC9JR@ds061371.mlab.com:61371/heroku_2wz0h0c7", {
  useNewUrlParser: true,
  useFindAndModify: false
} || "localhost:3000");

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
