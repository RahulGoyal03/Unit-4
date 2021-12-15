const {Schema, model} = require("mongoose")

const userSchema = new Schema({
    first_name : {type: String, required: true},
    last_name : {type: String, required: true},
    email : {type: String, required: true, unique: true},
    role : {type: String, required: true, default: "user"}
}, {
    versionKey: false,
    timestamps: true
})

module.exports = model("users", userSchema)