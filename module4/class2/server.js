const express = require("express");

const app = express();
const PORT = 8080


//Built in middleware
app.use(express.static('public'))


//I want to create a logger middleware here
// app.use((req,res,next)=>{
//     console.log(req.method,req.ip,req.hostname, new Date());
//     next();
// })

const auth = (req,res,next)=>{
    console.log(req.query)
    let password = req.query.password;
    if(password == '123'){
        next();
    }else{
        res.send("You are not authorized person");
    }
}

// app.use(auth);  // app.use method is used to invoke middlewares

//Route Level Middlewares

//endpoint
app.get('/',(req,res)=>{
    res.send({"type":"get"})
})

app.get("/users/:id", auth, (req,res)=>{
    console.log(req.params);
    // res.send("Hello World");
    // res.send("<h1>Hello world in h1 heading</h1")
    // res.send({"name":"Deepanshu"})
    res.send("Authorized person access granted")
})



app.post("/", (req,res)=>{
    res.send({"type":"POST"});
})

app.put("/",(req,res)=>{
    res.send({"type":"PUT"})
})

app.delete("/",(req,res)=>{
    res.send({"type":"DELETE"})
})

app.listen(PORT,()=>{
    console.log(`Server has started at ${PORT}`)
})