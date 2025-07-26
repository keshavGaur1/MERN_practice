/*
filter func - ye bhi hmesha callBack accept krega

filter - array ki kuch value ko filter karna -- based on some condition  .

return type of filter is array  -  filter always returns an array 
*/



// ques - return even no present in array -- using filter krege

// ----------------------------------------------------------------------------------

/*
let arr = [ 1,2,3,4,5 ]

function myCallback(ele) {
    if( ele%2 == 0 ) return true ;
}


let ans = arr.filter( myCallback)
console.log(ans);
*/


// ----------------------------------------------------------------------------------

/*

let arr = [ 1,2,3,4,5 ]

let ans = arr.filter( (ele) => {
        if( ele%2 == 0 ) return true ;
    }
)
console.log(ans);

*/


// ----------------------------------------------------------------------------------

/*

let arr = [ 1,2,3,4,5 ]

function myCallback(ele) {
    if( ele%2 == 0 ) return true ;
}


let ans = arr.filter( (ele) => ele%2 == 0 )
console.log(ans);

*/