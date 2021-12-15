const express = require("express")

const app = express()

app.use(express.json())

module.exports = app
const { body, validationResult } = require("express-validator")

const { register, login } = require("./controllers/auth.controller")

const postController = require("./controllers/post.controller")

app.post("/register",
    body("name").isLength({ min: 1 }).withMessage("First Name is required"),
    body("email").custom(async (value) => {
        const isEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/.test(value);
        const listOfDomain = ["gmail.com", "yahoo.com"];
        const email = value.split("@");

        if (!listOfDomain.includes(email[1])) {
            throw new Error("We do not accept emails from this domain");
        }

        if (!isEmail) {
            throw new Error("Please enter a proper email address");
        }
        return true
    }),

    body("password").isLength({ min: 8, max: 20 }).withMessage("Password should not be less than 8 and not to be greater than 20"),

    register)
app.post("/login", body("email").custom(async (value) => {
    const isEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/.test(value);
    const listOfDomain = ["gmail.com", "yahoo.com"];
    const email = value.split("@");

    if (!listOfDomain.includes(email[1])) {
        throw new Error("We do not accept emails from this domain");
    }

    if (!isEmail) {
        throw new Error("Please enter a proper email address");
    }
    return true
}),

    body("password").isLength({ min: 8, max: 20 }).withMessage("Password should not be less than 8 and not to be greater than 20"),
    login)

app.use("/posts", postController)