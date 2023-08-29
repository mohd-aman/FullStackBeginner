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
