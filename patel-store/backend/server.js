const dotenv = require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const userRoute = require('./routes/userRoutes')
const errorHandler = require("./middleWare/errorMiddleware")


const app = express()
const PORT = process.env.PORT || 5000;

// MiddleWares
app.use(express.json())  // handle json part
app.use(express.urlencoded({extended: false})) // handle data that come from url
app.use(bodyParser.json()) // helps to pass info from front-end to back-end

// Routes Middleware
app.use("/api/users", userRoute)


//Routes
app.get("/",(req,res)=>{
    res.send("Home Page")
})

//Error Middleware
app.use(errorHandler); 

//Connect to DB and start server
mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`)
    })
})
.catch((err)=> console.log(err)
)