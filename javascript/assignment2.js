// gives cities_data . return those cities who's population < 10000 

let cities_data = [
    { name : "kanpur" , population : 10000} ,
    { name : "lucknow" , population : 4000} ,
    { name : "delhi" , population : 11000} ,
    { name : "pune" , population : 3000} ,
]


function myCallback (ele ){
    if( ele.population < 10000 ) return true ;
}


let ans = cities_data.filter( myCallback )
console.log(ans);
