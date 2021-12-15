const express = require("express")

const router = express.Router()

const User = require("../models/user.model")

const unlink = require('fs');
const upload = require("../middlewares/uploads")


router.post("/", upload.single("profile_pic"), async (req, res) => {
    try{

        const user = await User.create({
            first_name : req.body.first_name,
            last_name: req.body.last_name,
            profile_pic: req.file.path,
        })

        return res.status(201).json({user})

    }catch(e) {
        return res.status(500).json({message: e.message, status: "Failed"})
    }
})


router.patch("/:id", upload.single("profile_pic"), async (req, res) => {
    try{

    const fin = await User.findById(req.params.id)

   //console.log(fin)

    unlink.unlinkSync(fin.profile_pic)


    

        const user = await User.findByIdAndUpdate(req.params.id, {
            first_name : req.body.first_name,
            last_name: req.body.last_name,
            profile_pic: req.file.path,
        }, {new: true})

        return res.status(201).json({user})

    }catch(e) {
        return res.status(500).json({message: e.message, status: "Failed"})
    }
})

router.delete("/:id" , async (req, res) => {
    try{
        const fin = await User.findById(req.params.id)
        unlink.unlinkSync(fin.profile_pic)
        
        const user = await User.findByIdAndDelete(req.params.id)


        return res.status(201).json({user})

    }catch(e) {
        return res.status(500).json({message: e.message, status: "Failed"})
    }
})

module.exports = router