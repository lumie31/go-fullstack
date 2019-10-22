const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://openclassroom:openclassroom@openclassroomdb-1f0ft.mongodb.net/test?retryWrites=true&w=majority",
    { useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch(error => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
  });

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.post("/api/stuff", (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: "Thing created successfully!"
  });
});

app.use("/api/stuff", (req, res, next) => {
  const stuff = [
    {
      _id: "oeihfzeoi",
      title: "My first thing",
      description: "All of the info about my first thing",
      imageUrl: "",
      price: 4900,
      userId: "qsomihvqios"
    },
    {
      _id: "oeihfzeomoihi",
      title: "My second thing",
      description: "All of the info about my second thing",
      imageUrl: "",
      price: 2900,
      userId: "qsomihvqios"
    }
  ];
  res.status(200).json(stuff);
});

// app.use((req, res, next) => {
//   console.log("Request received!");
//   next();
// });

// app.use((req, res, next) => {
//   res.status(201);
//   next();
// });

// app.use((req, res, next) => {
//   res.json({ message: "Your request was successful!" });
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Response sent successfully!");
// });

module.exports = app;
