import express from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

//importing routes
import studentRouter from "./routes/student.js"


//MongoDB Connect URI
const DB='mongodb+srv://faraz:12345@cluster0.lkjvp.mongodb.net/student?retryWrites=true&w=majority'

//connect to Database
mongoose.connect(DB, {
    useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true, useFindAndModify:false
}).then(() =>{
    console.log("Connected to DB")
}).catch((err) =>{
    console.log("Error found")
})





const welcome=(req,res)=>{
    res.send("<h1> Hello World!! </h1> <h2> Welcome to Homepage </h2>")
}


        //server start
        const app = express();
        app.use(bodyParser.json())

        app.get("/", (req,res) =>{
            res.send("Welcome Home");
        });






// listening to server
app.listen(3000,()=>{
    console.log("Listening to server")
})

app.use("/student",studentRouter);