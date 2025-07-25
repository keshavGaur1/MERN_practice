/*

--------------------------------------------------------------------------------------------

let a = 5 
let b = "5"  

console.log(a+b)   // 55
console.log(a-b)   // 0
console.log(a*b)   // 25
console.log(a/b)   // 1

sirf + ke case mai 

--------------------------------------------------------------------------------------------

let a=5
let b="5"

console.log( a + (a>b) )  
ans - 5

how ??

console.log( 5 + false )
console.log( 5 + 0 )
 

let a="5"
let b=5

console.log( a + (a==b) )  
ans - 5true

how ??

console.log( "5" + true )


--------------------------------------------------------------------------------------------



    let a=5 , b=6 ,c=7 ;

    let result ;
    result = (a+7) = (b-3) = (c+4)

    console.log(result)   

    // ye error dega - Uncaught SyntaxError: Invalid left-hand side in assignment

    assignment operation mai LHS mai koi variable hona chiye tabhi to usko value assign krege

    assignment operator ke LHS mai - agar expression ya constant hai to error hi ayegi



--------------------------------------------------------------------------------------------




    let a=5 , b=6 ,c=7 ;

    let result ;
    result = a = b = (c+4)

    console.log(result)   // 11 



--------------------------------------------------------------------------------------------


        let result ;

        result = 1,2,3;
        console.log(result);  // 1

        // = ki precedance , se jyada hoti .  to phele result = 1 evaluate hua aur bas code khtm so ans is 1

        result = (1,2,3);
        console.log(result);  // 3 

        // () ki precedance = se jyada hoti. to phele (1,2,3) evaluate hoga aur iski value 3 hogi . fir assignment operator se result=3


        , - lowest precedance
        assignment operators - 2nd lowest precedance




        for(let a=1,b=10 ; b>10 , a<=5 ; a++ , b-- ){
            console.log("A: "+a, "B: " + b);
        }


        yaha kewal a<=5 wali condition hi check hogi kewal (b>10 se koi matlab nhi )
        
        why ?? - waha b>10 , a<=5   likha hai

        ab , ki precedance sabse kam hoti to -

        phele b>10 use hua . fir a<=5 expression use hua 
        ab , execute hoga . per hmara expression kewal a<=5 hai
        
        to condition kewal a<=5 per hi chlegi




        
--------------------------------------------------------------------------------------------

















*/
