
/*
exporting string literal

module.exports = "ritz"  // "ritz" is string literal
*/



/*
exporting variables 

let nm='rituu'
let age = 46

module.exports = nm 
module.exports = age  // kewal yhi export hoga 

jo baad mai likhte hai whi export hota hai

*/



/*
let nm='rituu'
let age = 46

module.exports = nm , age     // ab isse kewal nm jayega kyoki assignment ki precedance jyada h

// output - rituu

*/



/*
let nm='rituu'
let age = 46

module.exports =  [nm , age]    // export an array

// output - [ 'rituu', 46 ]
*/




/*
let nm='rituu'
let age = 46

module.exports =  {nm , age}    // export an object

// output - { nm: 'rituu', age: 46 }   
// matlab variable as a key value pair save hogye object mai
*/


// ------------------------------------------------------------------------------------------------------------------------

/*
function myFun1 (){
    console.log('fun1 calling .......');  
}

module.exports =  myFun1    // export an function
*/



/*
// exporting 2 functions - using array 

function myFun1 (){
    console.log('fun1 calling .......');  
}


function myFun2 (){
    console.log('fun2 calling .......');  
}

module.exports = [myFun1 , myFun2]   // export an function

// note - this is not used . exporting as a object is used
*/



/*
// exporting 2 functions - using array

function myFun1 (){
    console.log('fun1 calling .......');  
}


function myFun2 (){
    console.log('fun2 calling .......');  
}

module.exports = {myFun1 , myFun2}   // export an function

// note - as a object isliye export krte jisse import krte time function ka naam same rhe ( functions ka naam change na ho )

// for better understanding - keeping the name of function same is necessary

*/











// ------------------------------------------------------------------------------------------------------------

/*

module.exports = 5
5 is integer literal


*/