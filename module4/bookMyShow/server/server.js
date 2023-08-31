const express = require("express");
const PORT = 8080;

const app = express();

require("dotenv").config();
const dbConfig = require('./config/dbConfig');
const userRoute = require('./routes/userRoute');

app.use(express.json());
app.use('/',userRoute);


app.listen(PORT,()=>{
    console.log(`Server is live at PORT ${PORT}`)
})