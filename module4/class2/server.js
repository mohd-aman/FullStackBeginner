const express = require("express");

const app = express();

//endpoint
app.get("/",(req,res)=>{
    // res.send("Hello World");
    // res.send("<h1>Hello world in h1 heading</h1")
    // res.send({"name":"Deepanshu"})
    res.send({'type':"GET"})
})

app.post("/",(req,res)=>{
    res.send({"type":"POST"});
})

app.put("/",(req,res)=>{
    res.send({"type":"PUT"})
})

app.delete("/",(req,res)=>{
    res.send({"type":"DELETE"})
})

app.listen(8082,()=>{
    console.log("Server has started at 8080")
})