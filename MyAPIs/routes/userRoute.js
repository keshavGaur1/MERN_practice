const express = require("express");
const router = express.Router(); // ab sare routes router se likhe jayege

// importing controllers
const { userDefault, userHome } = require("../controllers/user.controller");

// localhost://9000/User
router.get("/", userDefault);

// localhost://9000/User/home
router.get("/home", userHome);

/*

// localhost://9000/User 
router.get('/', (req,res)=> {  // User route ki default requests
    res.send("<h1 align='center'> User Default page </h1>")
}) 


// localhost://9000/User/home 
router.get('/home', (req,res)=> {  // User route ki default requests
    res.send("<h1 align='center'> User HOME page </h1>")
}) 

*/

// exporting the User routes
module.exports = router;
