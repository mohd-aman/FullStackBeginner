const router = require("express").Router();
const Movie = require('../models/movieModel');


router.post('/add-movie', async (req,res)=>{
    try{
        const newMovie = new Movie(req.body);
        // console.log(newMovie);
        await newMovie.save();
        res.send({
            success:true,
            message:"Movie added",
        });
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
})


router.get('/get-all-movies',async (req,res)=>{
    try{
        const movies = await Movie.find();
        res.send({
            success:true,
            message:"All Movies Fetched",
            data:movies
        })
    }catch(err){
        return res.send({
            success:false,
            message:err.message
        })
    }
})


module.exports = router;