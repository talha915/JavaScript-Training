const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Categories = mongoose.model('Category');

router.get('categories', (req, res)=> {
    Categories.find()
    .then((category)=> {
        res.json({category});
    }) 
    .catch((err)=> {
        console.log("Error: ", err);
    });
});

module.exports = router;