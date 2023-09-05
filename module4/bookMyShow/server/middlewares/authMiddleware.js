const jwt = require("jsonwebtoken");


module.exports = function(req,res,next){
    try{
        // [Bearer, ${localStorage.getItem('token')}]
        console.log(req.headers.authorization);
        const token = req.headers.authorization.split(' ')[1];
        console.log(token);
        const decoded = jwt.verify(token,process.env.jwt_secret_key);
        console.log(decoded);
        req.body.userId = decoded.userId
        
        next();
    }catch (err){
        res.send({success:false,message:"Invalid token"})
    }
}