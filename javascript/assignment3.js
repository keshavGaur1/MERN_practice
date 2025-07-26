// sum of prizes of the object 

let carts = [
  { proName: "watch", prize: 499 },
  { proName: "buds", prize: 299 },
  { proName: "laptop", prize: 699 },
];

let ans = carts.reduce((prev, curr) => prev + curr.prize , 0 );

// yaha prev ki value 0 hai , aur usi mai aage ke objects ka prize add horha

console.log(ans);
