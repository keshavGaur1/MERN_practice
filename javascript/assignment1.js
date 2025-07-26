// given transection object . perform given transection operations and tell balance 


let balance = 0 ;

function myCallBack (ele){
    if(ele.type == 'deposit'){
        balance+=ele.amt;
        console.log(`deposited : ${ele.amt} , balance : ${balance} ` ); 
    }
    else if (ele.type == 'withdraw'){
        balance-=ele.amt;
        console.log(`withdraw : ${ele.amt} , balance : ${balance} ` ); 
    }
}

const transection = [
    { type:"deposit" , amt:1000 },
    { type:"withdraw" , amt:200 },
    { type:"deposit" , amt:500 },
    { type:"withdraw" , amt:300 },
]


transection.forEach(myCallBack);


/*

print the given object array - by writing callback inside forEach

const transection = [
    { type:"deposit" , amt:1000 },
    { type:"withdraw" , amt:200 },
    { type:"deposit" , amt:500 },
    { type:"withdraw" , amt:300 },
]


transection.forEach( function (ele) {
    console.log(ele);
});


*/

/*

print the given object array - by writing arrow func inside forEach

const transection = [
    { type:"deposit" , amt:1000 },
    { type:"withdraw" , amt:200 },
    { type:"deposit" , amt:500 },
    { type:"withdraw" , amt:300 },
]

transection.forEach(  (ele) => {console.log(ele)}  );

// note - agar arrow function mai kewal 1 hi argument ho to () laga jaruri nhi hai . (ele)=> to ele => 
transection.forEach(  ele => {console.log(ele)}  );
*/