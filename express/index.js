const express = require("express")  // ye bhi internally http module hi use krta hai 
const app = express()   // app is an instance of an Express application

const HOST = 'localhost'    // 127.0.0.1
const PORT = 9000

/*
app.get('/', (req,res) => {
    res.send("<h1>applicationn default page </h1> ")
})

app.get('/home', (req,res) => {
    res.send("<h1>applicationn HOME page </h1> ")
})

app.get('/about', (req,res) => {
    res.send("<h1>applicationn about page </h1> ")
})

app.post('/', (req,res) => {
    res.send("Post request handler... ")
})
*/




// ---------------------------------------------------------------------------------------------------------
// ejs ko render krana
/*
app.set('view engine' , 'ejs')

app.get('/' , (req,res) => {
    res.render('default')
})

// static-public resources kaha h use batayega - public folder ke ander (images,css,javascripts)
app.use(express.static('public'))
*/

// ---------------------------------------------------------------------------------------------------------




// ---------------------------------------------------------------------------------------------------------

// ejs ko render krana + send data to the page 

app.set('view engine' , 'ejs')

let name = 'keshavvv'
let msg = "<font size='4' face='chiller'> HELLO </font>" 

let isValid = false 

app.get('/' , (req,res) => {

    res.render('default' , {name , msg ,isValid } )

    // res.render('default' , {name } )   
    // name variable ko as a data {} ke ander bhejege {name}   ( hmesha json or object format mai )
})

// static-public resources kaha h use batayega - public folder ke ander (images,css,javascripts)
app.use(express.static('public'))



// home page of ejs 
app.get('/home', (req,res) => {
    let fruitsNames = ["Apple","Mongo","Banana","PineApple" ]

    let userData = {uid:1001 , unm:"virat" , gender:'male' }

    res.render("home", {fruitsNames , userData} )  // rendering home.ejs
})



// ---------------------------------------------------------------------------------------------------------

// /user se request aye to userRoute.js , /admin se request aye to adminRoute.js

const adminRoute = require('./routes/adminRoute') 
const userRoute = require('./routes/userRoute') 

// app.use() - http://localhost:9000 
// agar iske baad /admin aaye - matlab http://localhost:9000/admin to - ise adminRoute per re-direct kr do
app.use('/admin', adminRoute)


// app.use() - http://localhost:9000 
// agar iske baad /user aaye - matlab http://localhost:9000/user to - ise userRoute per re-direct kr do
app.use('/user', userRoute)






// ---------------------------------------------------------------------------------------------------------

app.listen( PORT , HOST , (err)=>{

    if( err ) {
        console.log(err);
    }
    else 
        console.log(`server running at http://${HOST}:${PORT}`);
        
})