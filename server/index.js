const express = require("express");
// const fs = require("fs");
const path = require("path");
const http = require("http");
const helmet = require("helmet");
const app = express();
const cors = require("cors");

app.use(helmet());
// app.use(bodyParser.json());

const origin = "http://localhost:8080";

app.use(
  cors({
    origin,
    credentials: true,
    exposedHeaders: "Location",
    optionsSuccessStatus: 200,
  })
);

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", origin);
//   next();
// });

app.use(express.static("dist"));

app.get("/api/cards/:numberOfCards", async function (req, res) {
  const cardsValueSet = new Set();
  const numberOfCards = parseInt(req.params.numberOfCards, 10);

  while (cardsValueSet.size < numberOfCards) {
    const value = Math.round(Math.random() * 100).toString();
    cardsValueSet.add(value);
  }

  const array = Array.from(cardsValueSet);

  const newArray = array.map((val) => {
    return { value: val };
  });

  res.json(newArray);
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

http.createServer(app).listen(8081);
