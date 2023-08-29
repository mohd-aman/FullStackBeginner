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

// operators 
// $lt
// lte 
// gte 
// gt 
// in
// not in

async function getCourse(){
    // const course = await Course.find({rating:{$lte:3.5}});
    const course = await Course.findById("64ed5c6a2d37a689a162823c");
    console.log(course);
}

// getCourse();

async function updateCourse(id){
    let course = await Course.findById(id);
    if(!course){
        return
    }
    course.name = "Scala"
    course.creator = "Carey"
    const updatedCourse = await course.save();
    console.log(updatedCourse)
}

// updateCourse("64ed5c6a2d37a689a162823c");

async function deleteCourse(id){
    const deletedCourse = await Course.findByIdAndDelete(id);
    console.log(deletedCourse);
}


deleteCourse("64ed5c9ffcd52a647a0314cc");
