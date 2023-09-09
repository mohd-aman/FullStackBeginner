const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const Movie = require('../models/movieModel');

//add a movie
router.post('/add-movie',authMiddleware ,async (req,res)=>{
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

//get all the movies
router.get('/get-all-movies',authMiddleware,async (req,res)=>{
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

//get a movie by id
router.get('/get-movie-by-id/:id',async(req,res)=>{
    try{
        const movie = await Movie.findById(req.params.id);
        res.send({
            success:true,
            message:"Movie fetched",
            data:movie
        })
    }catch(err){
        res.send({
            success:false,
            message:error.message
        })
    }
})

//update a movie
router.put('/update-movie', authMiddleware,async (req,res)=>{
    try{
        await Movie.findByIdAndUpdate(req.body.movieId,req.body);
        res.send({
            success:true,
            message:"Movie updated"
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
})

//delete a movie
router.put('/delete-movie',authMiddleware,async(req,res)=>{
    try{
        await Movie.findByIdAndDelete(req.body.movieId);
        res.send({
            success:true,
            message:"Movie Deleted"
        })
    }catch(err){
        res.send({
            success:false,
            message:error.message
        })
    }
})

module.exports = router;