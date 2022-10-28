const express = require("express");
const { json } = require("express"),
  bodyParser = require("body-parser");
const todo = require("./routes/todoRoute");
const { PORT } = process.env;

// Configuring the database
const dbConfig = require("./db/database.js");
dbConfig();

const app = express();

app.use(json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/todo", todo);

// define a simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Todo Tasks application.",
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
