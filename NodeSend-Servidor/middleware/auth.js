const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if( authHeader ){
        const token = authHeader.split(' ')[1];
        try {
            const user = jwt.verify(token, process.env.SECRET);
            req.user = user;
        } catch (error) {
            console.log(error);
            console.log("JWT not valid")
        }

    }
    return next();
}