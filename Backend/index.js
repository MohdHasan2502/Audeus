const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const Routes = require('./routes/userRoutes');
const port=  3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: "https://audeus-client.vercel.app/",
    methods: ["GET", "POST"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// MongoDB Connection
const mongoURI = process.env.MONGO_URI;
mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Use Routes
app.use('/user', Routes);
app.use('/',(req,res)=>res.send('Welcome to the backend'));

// Server


app.listen(3000, function () {
  console.log(`Server is running on ${port}`);
});
