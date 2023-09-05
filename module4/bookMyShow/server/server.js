const express = require("express");
const cors = require('cors');
const PORT = 8080;

const app = express();

require("dotenv").config();
const dbConfig = require('./config/dbConfig');
const userRoute = require('./routes/userRoute');
const movieRoute = require("./routes/movieRoute");

app.use(cors());
app.use(express.json());
app.use('/api/users',userRoute);
app.use('/api/movies',movieRoute);


app.listen(PORT,()=>{
    console.log(`Server is live at PORT ${PORT}`)
})