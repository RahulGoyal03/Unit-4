const express = require("express")

const router = express.Router();

const Product = require("../models/product.model")

const authorise = require("../middlewares/authorise")

const authenticate = require("../middlewares/authenticate")

router.post("/", authenticate, authorise(["admin", "seller"]), async (req, res) => {

    try{

        const user = req.user

        const product = await Product.create({
            name : req.body.name,
            price : req.body.price,
            user : user.user._id
        })

        res.status(201).json({product})

    }catch(e) {
    return res.status(500).json({ status: "failed", message: e.message });
    }
})

router.patch("/:id", authenticate, authorise(["admin", "seller"]), async (req, res) => {


    try {
        const user = req.user

        const product = await Product.findByIdAndUpdate(req.params.id , {
            name : req.body.name,
            price : req.body.price,
            user : user.user._id
        }, {new : true})
        res.status(201).json({product})

    }catch(e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }

})

router.delete("/:id", authenticate, authorise(["admin", "seller"]), async (req, res) => {

    try{

        const user = req.user
        const product = await Product.findByIdAndDelete(req.params.id)

        return res.status(201).json({product})

    }catch(e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }

})

router.get("/", async (req, res) => {
    try {
        const product = await Product.find({}).populate("user").lean().exec()
        return res.status(201).json({product})
    }catch(e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
})

module.exports = router