/*
let arr = [4,3,6,9,1,5]

arr.sort();
console.log(arr); // [ 1, 3, 4, 5, 6, 9 ]


let arr2 = [11,10,arr] ;
console.log(arr2);  // [ 11, 10, [ 1, 3, 4, 5, 6, 9 ] ]

// spread operator
let arr3 = [11,10,...arr] ;
console.log(arr3);   // [ 11, 10, 1, 3, 4, 5, 6, 9 ]

*/

//--------------------------------------------------------------------------------------------------

/*
note - sort mai problem ??

problem - sort func phele array ki value ko string mai convert krega fir sorting krega

to isse double digit wale number mai galat sorting hogi. for ex - 15<6  kyoki 1<6
 

let arr = [4,13,6,29,1,5]

arr.sort()  
console.log(arr)   // [ 1, 13, 29, 4, 5, 6 ]


*/

//--------------------------------------------------------------------------------------------------

/*

solution of above 

double or more digit wale numbers ko sort krne ke liye - 

sort() ke ander ek callback function likhte hai jiske basis per value sort hogi


a)
let arr = [4, 13, 6, 29, 1, 5];

function myCallBack(a, b) {
  return a - b;
}

arr.sort(myCallBack);
console.log(arr); // [ 1, 4, 5, 6, 13, 29 ]

b) 
let arr = [4, 13, 6, 29, 1, 5];

arr.sort((a, b) => a - b);

console.log(arr); // [ 1, 4, 5, 6, 13, 29 ]




imp. note - agar array mai [3,6] hai to sort ke ander ke callback mai a=6 , b=3 hoga . matlab opposite order mai values aayegi

let arr = [4, 13, 6, 29, 1, 5];

function myCallBack(a, b) {
  console.log(a,b);     // phela variable b , dusra variable a 
}

arr.sort(myCallBack);

output - 
13 4
6 13
29 6
1 29
5 1


*/
