const express =  require('express')
const app  = express()

const HOST = 'localhost'
const PORT = 9000


const userRoute = require('./routes/userRoute')

app.use('/user' , userRoute)

// -------------------------------------------------------------------------------------------------------------
// Middlewares - 
/*  
// yaha hm logo ne next() nhi likha na hi res.send() kara - to browser per hmesha loading hoti rhegi

app.use((req,res,next) => {
    console.log("Middleware 1");
})
*/

// application level middleware
app.use((req,res,next) => {
    console.log("Middleware 1");
    next();  // req aage send krne ke liye
})



app.use((req,res,next) => {
    console.log("Middleware 2 " + (1/0) );  // Middleware 2 Infinity (it is not an error )

    /*
    // creating an error to check error handling middleware
    const err = new Error("Error .... ")
    next(err);
    */
    next()
    // res.send('response send by middleware 2 ')  // res send krne ke liye
}) 


// routes specific middleware
app.use('/home' , (req,res,next) => {
    console.log("Middleware Home");
    next();
}) 


// -------------------------------------------------------------------------------------------------------------

// app routes -

app.get('/' , (req,res) => {
    res.send("<h1 align='center'>  middleware application  </h1>")
})

app.get('/home' , (req,res) => {
    res.send("<h1 align='center'>  middleware application HOME page </h1>")
})

app.get('/about' , (req,res) => {
    res.send("<h1 align='center'>  middleware application ABOUT page  </h1>")
})



// -------------------------------------------------------------------------------------------------------------


// Error Handling Middlewares 

app.use( (err,req,res,next) => {
    console.log("Error handling middleware .... ");
    next();
} )




// -------------------------------------------------------------------------------------------------------------

app.listen(PORT,HOST , (err) => {
    if( err ){
        console.log("Error occured.." + err);
    }
    else{
        console.log(`server running at http://${HOST}:${PORT}`);
    }
})