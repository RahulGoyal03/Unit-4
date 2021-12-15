require("dotenv").config()

const jwt = require("jsonwebtoken")

const verifyToken = (token) => {

    return new Promise ((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET_KEY, function(err, token) {
            if(err) {return reject(err)}
            return resolve(token);
        })
    })

}

module.exports = async (req, res, next) => {
    const bearerToken = req?.headers?.authorization;

    if(!bearerToken || !bearerToken.startsWith("Bearer ")) {
        return res.status(400).json({
            status: "Failed",
            message : "Please provide a valid token"
        })
    };

    const token = bearerToken.split(" ")[1]

    let user;

    try {
        user = await verifyToken(token)
    }catch(e) {
        return res.status(400).json({
            status: "failed",
            message: "Please provide a valid token",
          });
    }

    if(!user) {
        return res.status(400).json({
            status: "failed",
            message: "Please provide a valid token",
          });
    }

    req.user = user;

    return next()



}
