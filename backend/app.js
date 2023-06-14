const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Book = require("./models/book");

const process = require("./nodemon.json");

const MONGO_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.atqwvze.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  next();
});

app.get("/api/books", async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (error) {
    console.log(error);
    return res.json({ message: "Get books failed" });
  }

  res.json(books);
});

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to database");
    app.listen(5001);
  })
  .catch((err) => {
    console.log(err);
  });
