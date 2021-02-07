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

router.post("/add-posts", (req, res)=> {
    const { title, description, imgUrl, category } = req.body;
    
    if(!title, !description, !imgUrl, !category) {
        res.send({ msg: "All Fields are required" });
    }

    const post = new Post({
        title,
        description,
        imgUrl,
        category
    });

    post.save.then(()=> {
        res.send({
            msg: 'Post created'
        });
    })

});

module.exports = router;