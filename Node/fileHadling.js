// Serialization - process of converting JavaScript objects into a string format (usually JSON) 
// Deserialization - process of converting a string (usually JSON format) back into a JavaScript object.


/*  Reading a file

const fs = require('fs')

// fs.readFile('fileName' , callback function)
// callback function -  error aur data ko handle krne ke liye


fs.readFile('fileHandling.txt' , (err,data)=>{
    if( err ){
        console.log("Error occured ... " + err);
    }
    else{
        console.log(data.toString() );  // data ko string format mai convert krna pdega wrna buffer milega
    }
} )
*/





/* Writing in a file

const fs = require('fs')
let str = 'he will be sucessful '

fs.writeFile('fileHandling.txt' , str + "\n"  , (err) => {
    if( err )
        console.log(err);
    else 
        console.log("Data saved");
})
*/




/* Append data in the file

const fs = require('fs')
let str = 'Use knowlegde as a weapon '

fs.appendFile('fileHandling.txt' , str + "\n"  , (err) => {
    if( err )
        console.log(err);
    else 
        console.log("Data saved");
})
*/




/* deleting a file 

fs.unlink('fileHandling.txt' , (err) => {
    if( err )
        console.log(err);
    else 
        console.log("file deleted");
           
})
*/