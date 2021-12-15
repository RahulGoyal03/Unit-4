const express = require("express")

const router = express.Router()

const Gallery = require("../models/gallery.model")


const upload = require("../middlewares/uploads")

const unlink = require('fs');
router.post("/", upload.any("pictures"), async (req, res) => {
    const filePaths = req.files.map((file) => file.path)
    try{

        const gallery = await Gallery.create({
            pictures : filePaths,
            user_id : req.body.user_id,
        })

        return res.status(201).json({gallery})

    }catch(e) {
        return res.status(500).json({message: e.message, status: "Failed"})
    }
})


router.delete("/:id", async (req, res) => {
    try{

        const fin = await Gallery.findById(req.params.id)
        
        for(let i = 0; i < fin.pictures.length; i++) {
            unlink.unlinkSync(fin.pictures[i])
        }

        const galery = await Gallery.findByIdAndDelete(req.params.id)
        res.status(201).send(galery)

    }catch(e) {
        return res.status(500).json({message: e.message, status: "Failed"})
    }
})

module.exports = router