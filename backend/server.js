//const app = require("./app");
const express = require("express");
const app = express();
const cors = require("cors");

//create server to run node.js
const port = 3001;
const host = "127.0.0.1";

//install mongoose
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://vimansha:<password>@cluster0.x5es1xa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("MongoDB error : ", err);
  }
};
connect();

const server = app.listen(port, host, () => {
  console.log(`Node server is listening to ${server.address().port} `);
});
