const adminDefault = function (req,res) {  // handle default request of admin route
    res.send("<h1 align='center'> Admin Default page </h1>")
}

const adminHome = (req,res) => {  // handle home route request of admin route
    res.send("<h1 align='center'> Admin Home page </h1>")
}

module.exports = { adminDefault , adminHome }
// object export kra jisse import krte time isi naam se function ko use kr paye ( for better understanding )