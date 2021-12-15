const express = require("express")

const router = express.Router();

const User = require("../models/user.model")

const sendMail = require("../utils/send-mail")
router.post("/", async (req, res) => {
    try{
    const user = await User.create(req.body)
    const admins = await User.find({role: "admin"})
        
    sendMail("rahulgl0303@gmail.com", 
     req.body.email,
     `Welcome to ABC system ${req.body.first_name}  ${req.body.last_name}`,
    `Hi  ${req.body.first_name}, Please confirm your email address`,
     `<h1>Hi  ${req.body.first_name}, Please confirm your email address</h1>`)

    for(let i = 0; i < admins.length; i++) {

        sendMail("rahulgl0303@gmail.com", 
        admins[i].email,
         `${req.body.first_name} ${req.body.last_name} has registered with us`,
         `Please welcome ${req.body.first_name} ${req.body.last_name}`, 
         `<h1>Please welcome ${req.body.first_name} ${req.body.last_name}</h1>`)

    }

     

    res.status(201).send(user)
    }catch(e) {
        res.status(500).json({message: e.message, status : "Failed"})
    }
})


router.get("/" , async (req, res) => {
    try{

    

    const page = +req.query.page || 1
    const size = +req.query.size || 2
    const skip = (page - 1) * size 
    const user = await User.find().skip(skip).limit(size).lean().exec();
    const totalPages = Math.ceil(
        (await User.find().countDocuments()) / size
    )
    res.status(201).send({user, totalPages})
    }catch(e) {
        res.status(500).json({message: e.message, status : "Failed"})
    }
})

module.exports = router;