const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Post = mongoose.model("Post");

router.get("/posts", (req, res)=> {
    Post.find()
    .populate("Category", "_id name")
    .then((posts)=> {
        res.json({posts});
    })
    .catch((err)=> {
        console.log("Error: ", err);
    }) 
});

module.exports = router;