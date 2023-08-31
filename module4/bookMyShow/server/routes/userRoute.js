const router = require("express").Router();
const bcrypt = require("bcrypt")
const User = require("../models/userModel");

router.post('/register',async (req,res)=>{
    // console.log(req.body);
    try{

        const userExists = await User.findOne({email:req.body.email});
        if(userExists){
            return res.send({
                success:false,
                message:"User with this email already exists"
            })
        }

        //hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        const newUser = new User(req.body);
        console.log(newUser)
        await newUser.save();
        res.send("got the data")
    }catch(err){
        console.log(err);    
    }
    
})

module.exports = router;