const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const Theatre = require('../models/theatreModel');

//add theatre

router.post('/add-theatre', authMiddleware, async (req,res)=>{
    try{
        const newTheatre = new Theatre(req.body);
        await newTheatre.save();
        res.send({
            success:true,
            message:"Theatre added"
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
})


//get all theatre by owner
router.post('/get-all-theatres-by-owner', authMiddleware, async(req,res)=>{
    try{
        const theatres = await Theatre.find({owner:req.body.owner})
        res.send({
            success:true,
            message:"Theatres fetched by owner",
            data:theatres
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })   
    }
})

router.put('/update-theatre', authMiddleware,async (req,res)=>{
    try{
        await Theatre.findByIdAndUpdate(req.body.theatreId,req.body);
        res.send({
            success:true,
            message:"Theatre Updated"
        })

    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
})

//delete a theatre
router.post('/delete-theatre', authMiddleware, async(req,res)=>{
    try{
        await Theatre.findByIdAndDelete(req.body.theatreId);
        res.send({
            success:true,
            message:"Theatre deleted"
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
})

router.get('/get-all-theatres',authMiddleware,async(req,res)=>{
    try{
        const theatres = await Theatre.find().populate('owner');
        res.send({
            success:true,
            message:"All Theatres fetched",
            data:theatres
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
})
module.exports = router;