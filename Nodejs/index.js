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

// Routes
app.get('/', (req, res)=> {
    res.send("Hello World !");
});

app.listen(PORT, ()=> {
    console.log("Server is running at: ", PORT);
})