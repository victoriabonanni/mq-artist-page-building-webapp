// IMPORT DEPENDENCIES
const express = require("express")
const app = express()
require("dotenv").config()
const mongoose = require("mongoose")

// CONNECT TO DATABASE
mongoose.set("strictQuery", false)
const URL = process.env.MONGODB_URL
mongoose.connect(URL, {}).then(()=> {
    console.log("BBDD is now connected")
}).catch((error) => {
    console.log(error)
})





app.listen(5002,()=>{console.log("Server is running on port 5002")})
