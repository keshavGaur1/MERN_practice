// let str =  "we are ahungry"
// let i = str.indexOf('a')

// console.log(i);

let arr = [1, 2, 3, 4, 5, 6];

/*
normal logic - 

let sum = 0;
arr.forEach((ele) => {
  sum += ele;
});
console.log(sum);
*/

/*
let r = arr.reduce( (sum,ele) => sum+ele , 0 )
console.log(r);  // 21


r = arr.reduce( (sum,ele) => sum+ele , 10 )
console.log(r); // 31
*/


/*
let r = arr.reduce((sum, ele) => sum * ele);
console.log(r); // 720


r = arr.reduce((sum, ele) => sum / ele);
console.log(r); // 0

note - 2nd parameter na dene per bhi -

sum ke case mai khud se initial value 0 consider krega
multiply ke case mai khud se initial value 1 consider krega
*/



syntax -

reduce ( (prev,curr) => { console.log(1); } , initializer )

// initializer = initial value