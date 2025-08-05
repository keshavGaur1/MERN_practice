
/*
// How to create new folder -

fs.mkdir('demoFolder', (err) => {
    if( err )
        console.log(err);
    else 
        console.log("New folder created");
           
    })
*/


/*
// How to delete a folder -

fs.rmdir('demoFolder' , (err) => {
    if( err )
        console.log(err);
    else 
        console.log("Folder deleted ");
           
    })
*/


const fs = require('fs')

if( ! fs.existsSync('demoFolder') ){
    fs.mkdir('demoFolder', (err) => {
    if( err )
        console.log(err);
    else 
        console.log("New folder created");
           
    })
}
else {
    console.log("Folder already exists");
}


if( fs.existsSync('demoFolder') ){
fs.rmdir('demoFolder' , (err) => {
    if( err )
        console.log(err);
    else 
        console.log("Folder deleted ");
           
    })
}
else {
    console.log("Folder already exists");
}
