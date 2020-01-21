const express = require("express");
const app = express();
const router = require("./config/routes");
const mongoose = require("mongoose");
const port = 3001;
const configureDB = require("./config/database");
const cors = require("cors");

configureDB();

app.use(cors());
app.use(express.json());
app.use("/", router);

app.get("/", (req, res) => {
  res.send("welcome to the app");
});

app.listen(port, () => {
  console.log("listening to port", port);
});
