const userDefault = function (req,res) {  // handle default request of User route
    res.send("<h1 align='center'> User Default page </h1>")
}

const userHome = (req,res) => {  // handle home route request of User route
    res.send("<h1 align='center'> User Home page </h1>")
}

module.exports = { userDefault , userHome }
// object export kra jisse import krte time isi naam se function ko use kr paye ( for better understanding )