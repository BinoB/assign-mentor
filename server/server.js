const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const assignRoute = require("./routes/assignRoute")



const app = express();

//Middlewares

app.use(express.json());
app.use(express.urlencoded({extended:false}))

// Routes Middleware

app.use("/api", assignRoute)


// Connect to DB and start server

const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT,()=>{
        console.log(`Server running on PORT ${PORT}`);
    })
  })
  .catch((err) => {
        console.log(err);
  });
