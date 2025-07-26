
/*
map func - ye bhi hmesha callBack accept krega

map - array ki sari values ko iterate krne ke liye

return type of map is array  -  map always returns an array 

map hmesha usi size ki array return krega jitne size ki array per ise use krege
*/


// ------------------------------------------------------------------------
// return sqaure of all numbers present in an array

/*
let arr = [1,2,3,4,5];

let ans = arr.map( (ele) => {
    return ele**2 ;
})

console.log(ans)
*/

// ------------------------------------------------------------------------

/*

note - ye cheez nhi krni hoti

let arr = [1,2,3,4,5];

let ans = arr.map( (ele) => {
    if( ele%2 == 0 ) return true;
})

console.log(ans)   // [undefined , true ,undefined , true ,undefined ]

matlab map mai agar false condition aarhi to bhi wo value ans array mai store hogi but undefined values hogi

*/

