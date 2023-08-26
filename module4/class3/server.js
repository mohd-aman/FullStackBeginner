const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 8080;

app.use(express.json()) //parses incoming requests with JSON payloads

const data = JSON.parse(fs.readFileSync("./data.json","utf-8"));
// console.log(data);
let products = data.products
// console.log(products);


app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.get("/products",(req,res)=>{
    res.send(products);
})

app.get("/products/:id",(req,res)=>{
    // console.log(req.params.id);
    let id = req.params.id;
    // console.log(id);
    const product = products.find(obj => obj.id == id);
    // [{id:1,"title":"phone"},{id:2,title:"laptop"},{id:3,title:"mouse"}]
    console.log(product);
    res.send(product)
})

app.post("/products",(req,res)=>{
    console.log(req.body);
    // console.log(req.body);
    let product = req.body;
    products.push(product);
    res.send("data added");
})

app.delete("/products/:id",(req,res)=>{
    const id = req.params.id;
    // [{id:1,"title":"phone"},{id:2,title:"laptop"},{id:3,title:"mouse"}]
    const productIndex = products.findIndex(obj => obj.id == id);
    // console.log(productIndex);
    products.splice(productIndex,1); // it removes the element and it make changes in original array
    // ["34",353,54,6,46,757];
    // [ 0,   1,  2,3, 4,  5]
    // console.log(products);
    res.send("data deleted");
})

app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`);
})