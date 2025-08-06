const adminDefault = function (req, res) {
  // handle default request of admin route
  /*
  res.send("<h1 align='center'> Admin Default page </h1>");
  */

  // adminViews/admindefault page ko render
  res.render('adminViews/admindefault')
};

const adminHome = (req, res) => {
  // handle home route request of admin route
  res.send("<h1 align='center'> Admin Home page </h1>");
};

// -------------------------------------------------------------------------------------------

const getAdminPage = (req, res) => {
  let nm = req.params.adminName; // access the adminName from url
  res.send(`<h1 align='center'> Admin ${nm} Data provided </h1>`);
};

// -------------------------------------------------------------------------------------------

module.exports = { adminDefault, adminHome, getAdminPage };
// object export kra jisse import krte time isi naam se function ko use kr paye ( for better understanding )
