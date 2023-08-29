const mongoose = require("mongoose")

const password = "odWbGMYr44bZOwaC";

const db = `mongodb+srv://saifiamaan445:${password}@cluster0.umc6xfk.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(db, )
.then(()=>{
    console.log("Connection Established")
})
.catch((err)=>{
    console.log(err);
})

//Schema

const courseSchema = new mongoose.Schema({
    name:String,
    creator:String,
    publishedDate:{type:Date,default:Date.now},
    isPublished:Boolean,
    rating:Number
})

//Model

const Course = mongoose.model('Course',courseSchema);


//CRUD
async function createCourse(){
    const course = new Course({
        name:"C++",
        creator:"XYZ",
        isPublished:true,
        rating:3.8
    })
    const courseCreated = await course.save();
}

// createCourse();