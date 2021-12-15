module.exports = function(permitRoles) {
    return function (req, res, next) {

        user = req.user.user;

        isAllowed = false;
        user.roles.map((role) => {
            if(permitRoles.includes(role)) {
                isAllowed = true
            }
        });

        if(!isAllowed) {
            return  res.status(401).json({
                status: "failed",
                message: " You are not allowed to access this",
              });
        }

        next()

    }
}