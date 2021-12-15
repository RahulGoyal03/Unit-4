const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    first_name : {type: String, required: true},
    last_name : {type: String, required: true},
    age: {type: String, required : true},
    email : {type : String , required :  true},
    pincode: {type: Number, required: false},
    gender : {type: String , required :  false},

}, {
    versionKey : false,
    timestamps: true
})

module.exports = mongoose.model("user", userSchema)