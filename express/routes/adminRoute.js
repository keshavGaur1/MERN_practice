const express = require("express")  
const router = express.Router()   // ab sare routes router se likhe jayege

// importing controllers
const {adminDefault , adminHome} = require('../controllers/admin.controller')


// localhost://8000/admin 
router.get('/', adminDefault) 


// localhost://8000/admin/home 
router.get('/home', adminHome) 


/*
// localhost://8000/admin 
router.get('/', (req,res)=> {  // admin route ki default requests
    res.send("<h1 align='center'> Admin Default page </h1>")  // handle request
}) 


// localhost://8000/admin/home 
router.get('/home', (req,res)=> {  // admin route ki default requests
    res.send("<h1 align='center'> Admin HOME page </h1>")
}) 
*/


// exporting the admin routes
module.exports  = router 

