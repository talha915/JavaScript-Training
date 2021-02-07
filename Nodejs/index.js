const express = require('express');

const app = express();

const PORT = 5000;

// Mongo

const mongoose = require('mongoose');
const { mongoConnectURI } = require('./key/key');

mongoose.connect(mongoConnectURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.connection.on("connected", ()=> {
    console.log("Connected to MongoDb!");
});

mongoose.connection.on("error", (error)=> {
    console.log("Error: ", error);
});

// Models
require("./models/post");
require("./models/category");

app.use(express.json());

// Routes
app.use(require("./routes/post"));

app.listen(PORT, ()=> {
    console.log("Server is running at: ", PORT);
})