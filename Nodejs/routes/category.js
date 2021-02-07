const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Categories = mongoose.model('Category');

router.get('/categories', (req, res)=> {
    Categories.find()
    .then((category)=> {
        res.json({category});
    }) 
    .catch((err)=> {
        console.log("Error: ", err);
    });
});

router.post('/add-category', (req, res)=> {
    const { name } = req.body;

    const category = new Categories({
        name
    });

    category.save().
    then(()=> {
        res.send({msg: 'Category Added'});
    })
    .catch((err)=> {
        res.send({msg: err});
    });
})

module.exports = router;