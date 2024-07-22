const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next) => {
    const token = req.cookies.token;
    if(!token) return res.status(401).json({message: "You are not authenticated"});
    
    try{
        const verifed = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verifed;
        next();
    }
    catch(err){
        return res.status(403).json({message: "Invalid Token"});
    }
}

module.exports = verifyToken;