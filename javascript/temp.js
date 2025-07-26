let carts = [
  { proName: "watch", prize: 499 },
  { proName: "buds", prize: 299 },
  { proName: "laptop", prize: 699 },
];

let ans = carts.reduce((prev, curr) => prev + curr.prize , 0 );

console.log(ans);
