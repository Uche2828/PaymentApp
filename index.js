const express = require("express");
const mongoose = require('mongoose');

const routes = require("./services");

const PORT = 5000;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();
app.use(express.json());

app.use(routes);

app.get("/ok", async (req, res) => {
  res.send("OK");
});

app.listen(PORT, async () => {
  console.log("Started server at port", PORT);
  await mongoose.connect(MONGODB_URI);
  console.log("Connected to mongodb atlas");
});
