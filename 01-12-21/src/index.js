const express = require("express")

const app = express()

app.use(express.json())


const userController = require("./controllers/users.controllers")
const galleryController = require("./controllers/gallery.controller")

app.use("/users", userController)
app.use("/gallery", galleryController)
module.exports = app;