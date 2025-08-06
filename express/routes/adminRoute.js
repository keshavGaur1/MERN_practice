const express = require("express")  
const router = express.Router()   // ab sare routes router se likhe jayege

// importing controllers
const {adminDefault , adminHome , getAdminPage } = require('../controllers/admin.controller')


// localhost://8000/admin 
router.get('/', adminDefault) 


// localhost://8000/admin/home 
router.get('/home', adminHome) 


// dynamic url 
// :adminName mai - : ki wajh se koi bhi naam ho sakta aur iski naam ki value ko req.params.adminName variable se hi access karege
router.get('/:adminName' , getAdminPage );




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

