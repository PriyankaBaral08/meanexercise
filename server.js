//importing files
import express from 'express'
import mongoose from 'mongoose'
import { configDotenv } from 'dotenv'

const URI=process.env.URI

//Creating instance of OBJECT
const express_api= express()
//connection to db
mongoose.connect("/localhost:27017/")
.then(console.log("Connection established Successfully"))
.catch((err)=>{
    console.error(err)
})
// using angular for frontend path 
express_api.use(express.static("./frontend/dist/frontend/browser"));
//creating server
express_api.listen(3000,()=>{
    console.log("server running on 3000")

})