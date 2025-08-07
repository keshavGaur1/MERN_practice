const UserModel = require('../models/adminModel')

const adminDefault = function (req, res) {
  // handle default request of admin route
  /*
  res.send("<h1 align='center'> Admin Default page </h1>");
  */

  // adminViews/admindefault page ko render
  res.render('adminViews/admindefault')
};

const adminHome = (req, res) => {
  /*
  // handle home route request of admin route
  res.send("<h1 align='center'> Admin Home page </h1>");
  */

  
  let userData = [
    {uid:1001 , unm:"sachin" , uage :30},
    {uid:1002 , unm:"ujjwal" , uage :30},
    {uid:1003 , unm:"krish" , uage :30},
    {uid:1004 , unm:"abhi" , uage :30},
    {uid:1005 , unm:"raju" , uage :30},
  ]

  res.render('adminViews/adminHome' , {userData} )
};

// -------------------------------------------------------------------------------------------

const getAdminPage = (req, res) => {
  let nm = req.params.adminName; // access the adminName from url
  res.send(`<h1 align='center'> Admin ${nm} Data provided </h1>`);
};

// -------------------------------------------------------------------------------------------

// localhost:9000/admin/addUser , method=get 
const addUser = async function (req,res)  {

  if( req.method === 'POST') {
    // console.log(req.fields);    // form ka data key value pairs mai

    // creating new user
    const newUser = new UserModel({
      userName : req.fields.unm ,
      password : req.fields.pwd ,
      emailId : req.fields.mailId
    })

    let user = await newUser.save()  // database mai data ko save krne ke liye 
    console.log(user);
    
  }

 res.render('adminViews/addUser')
}



// console.log("req filed ");




// -------------------------------------------------------------------------------------------
module.exports = { adminDefault, adminHome, getAdminPage , addUser };
// object export kra jisse import krte time isi naam se function ko use kr paye ( for better understanding )
