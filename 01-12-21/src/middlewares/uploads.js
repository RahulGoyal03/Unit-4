
const path = require("path")
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, path.join(__dirname, "../uploads"))
    },
    filename : function (req, file, callback) {
        const uniquePrefix = Date.now() + "-" + Math.round(Math.random() * 1e9)
        callback(null, uniquePrefix + "-" + file.originalname)
    },
})

const fileFilter = function (req, file, callback) {
    if(file.mimetype === "image/jpg" || file.mimetype === "image/png") {
        callback(null, true)
    }else {
        callback(null, false)
    }
}


module.exports = multer({
    storage,
    fileFilter,
    limits : {
        files: 5,
        fileSize: 1024 * 1024 * 15
    },
})