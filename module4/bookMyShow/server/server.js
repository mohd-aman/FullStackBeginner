const express = require("express");
const cors = require('cors');
const PORT = 8080;

const app = express();

require("dotenv").config();
const dbConfig = require('./config/dbConfig');
const userRoute = require('./routes/userRoute');

app.use(cors());
app.use(express.json());
app.use('/api/users',userRoute);


app.listen(PORT,()=>{
    console.log(`Server is live at PORT ${PORT}`)
})