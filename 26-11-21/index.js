const express = require("express");
const mongoose = require("mongoose");

const evalConroller = require("./routers/eval.router");
const highest = require("./routers/highest.router");

const app = express();

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://rahul:rahul03@cluster0.8acut.mongodb.net/test"
  );
};

app.use(express.json());

app.use("/api", evalConroller);
app.use("/api/student/highest", highest);

const start = async () => {
  await connect();
  app.listen(80, () => {
    console.log("Server Started");
  });
};

start();
