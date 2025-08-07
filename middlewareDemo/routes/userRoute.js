const express = require('express')
const router = express.Router();

// route level middleware
router.use((req,res,next) => {
    console.log('route level middleware');
    next();
    /*
    const err = new Error("Error .... ")
    next(err);
    */
})

// localhost:9000/user/contact
router.get('/contact' , (req,res) => {
    res.send("<h1 align='center'> User contact page </h1> ")
})


// localhost:9000/user/profile
router.get('/profile' , (req,res) => {
    res.send("<h1 align='center'> User profile page </h1> ")
})

module.exports = router 

