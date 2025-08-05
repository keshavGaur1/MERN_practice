// file handling in synchronous (blocking) way

const fs = require('fs')


/* writing a file 

let str = 'Wise man never get angry'

fs.writeFileSync('fileHandling2.txt' , str + "\n" )
*/ 


/* reading a file 

const data = fs.readFileSync('fileHandling2.txt')

console.log(data.toString());
*/


/* appending a file 

let s2 = "i am appending new line "
fs.appendFileSync('fileHandling2.txt' , s2 + '\n')
*/



/* deleting a file 

fs.unlink('fileHandling2.txt' , (err) => {
    if( err )
        console.log(err);
    else 
        console.log("file deleted");
           
})
*/

/*
fs.existsSync() -> check krne ke liye ki file exist krti hai ya nhi

if( fs.existsSync('fileHandling2.txt') ) {
    fs.unlink('fileHandling2.txt' , (err) => {
    if( err )
        console.log(err);
    else 
        console.log("file deleted");
           
    })
}
else{
    console.log("File not exists");
    
}
*/