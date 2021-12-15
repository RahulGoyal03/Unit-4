const express = require("express")

const app = express()

app.use(express.json());

module.exports = app;

const userController = require("./controllers/user.controller")

app.use("/users", userController)