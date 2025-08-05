/*
let name = require('./myLib')
console.log(name);
*/

// ----------------------------------------------------------------------------------------------------

// array and object import and destructuring

/*

ham logo ne object ko import kara hai aur use de-structuring kara hai

let {a,b} = require('./myLib')

console.log(a);   // undefined 
console.log(b);   // undefined

why ?? agar array hota to ye shi hota (kyoki usme indexing hoti to pheli value a mai dusri b mai)

but object key-value pair hota koi indexing nhi aur object mai a,b naam ki koi key nhi hai . isliye ye undefined dega

*/




/*

solution - correct de-structuring of object - using name of keys 

let {age,nm} = require('./myLib')

console.log(age);   // 46
console.log(nm);   // rituu

*/

// ------------------------------------------------------------------------------------------------------------------------

/*
let fn1 = require('./myLib')

console.log(fn1);   
fn1();
*/



/*
// importing array of functions 
let [fn1,fn2] = require('./myLib')
 
fn1();
fn2();
*/


/*
// importing object of functions 
let {myFun1, myFun2} = require('./myLib')
 
myFun1();
myFun2();
*/

