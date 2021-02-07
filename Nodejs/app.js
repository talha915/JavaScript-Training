const express = require('express');

const app = express();

const PORT = 5000;

// Routes
app.get('/', (req, res)=> {
    res.send("Hello World !");
});

app.listen(PORT, ()=> {
    console.log("Server is running at: ", PORT);
})