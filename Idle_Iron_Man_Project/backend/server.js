require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// express app
const app = express();

//middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next();
});

//routes
app.use("/api/workouts", workoutRoutes)

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log(`Connected to DB & listening on PORT, ${process.env.PORT}!!!!`)
    })
  })
  .catch((error) => {
    console.log(error)
  })

/*
app.get('/', (req, res) => {
    res.json({mesg: 'Welcome to the app'})
})

app.listen(4000, () => {
    console.log("Listening on port 4000!!!");
})
*/
