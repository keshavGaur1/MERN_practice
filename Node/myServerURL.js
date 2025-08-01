// initial request http ki aati
const http = require('http') ;


const HOST = 'localhost'
const PORT =  9000


// server banane ki request ko handle krne ke liye
const requestHandler = function (req,res) {
    console.log( req.method , req.url);

    switch( req.url ){
        case '/' :
            res.end("<h1>Welcome to Node Server....</h1> ") 
            break 
        case '/home':
            res.end("<h1>Welcome to home page .... </h1>")
            break
        case '/about':
            res.end("<h1>Welcome to about page .... </h1>")
            break
        default :
            res.end("<h1>Invalid request .... </h1>")
            break

    }
    
}
     


// http.createServer( requestHandler ) ; server bana ke use return krega
const server =  http.createServer( requestHandler ) ; 

// server listen krne ke liye
server.listen(PORT,HOST , (err) => {
    // localhost:PORT   localhost:9000

    if( err ){
        console.log("sevver not start... " + err );
    }
    else{
        console.log(`server running at http://${HOST}:${PORT}`);
    }
})









