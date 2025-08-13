const express = require("express");
const router = express.Router(); // ab sare routes router se likhe jayege

// importing controllers
const {
  adminDefault,
  adminHome,
  getAdminPage,
  addUser,
  showUser,
  editUser,
  deleteUser,
} = require("../controllers/admin.controller");

// -------------------------------------------------------------------------------------------------------------------

// localhost://9000/admin
router.get("/", adminDefault);

// localhost://9000/admin/home
router.get("/home", adminHome);

// localhost://9000/admin/addUser
router.get("/addUser", addUser);

// for post request -- localhost://9000/admin/addUser
router.post("/addUser", addUser);

// localhost://9000/admin/showUser
router.get("/showUser", showUser);

// localhost://9000/admin/editUser - :id dynamic url hai jo
router.get("/editUser/:id", editUser);

// localhost://9000/admin/editUser -
router.post("/editUser/:id", editUser);

// localhost://9000/admin/deleteUser - :id dynamic url hai jo id ke basis per element delete krega
router.get("/deleteUser/:id", deleteUser);

// dynamic url
// :adminName mai - : ki wajh se koi bhi naam ho sakta aur iski naam ki value ko req.params.adminName variable se hi access karege
router.get("/:adminName", getAdminPage);

// -------------------------------------------------------------------------------------------------------------------
/*
// localhost://9000/admin 
router.get('/', (req,res)=> {  // admin route ki default requests
    res.send("<h1 align='center'> Admin Default page </h1>")  // handle request
}) 


// localhost://9000/admin/home 
router.get('/home', (req,res)=> {  // admin route ki default requests
    res.send("<h1 align='center'> Admin HOME page </h1>")
}) 
*/

// -------------------------------------------------------------------------------------------------------------------

// exporting the admin routes
module.exports = router;
