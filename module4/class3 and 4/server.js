const express = require("express");
const productRoute = require("./routes/productRoute");


const app = express();
const PORT = 8080;

app.use(express.json()) //parses incoming requests with JSON payloads

app.use('/',productRoute.router);// middleware is initilizing our router for us.


app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`);
})