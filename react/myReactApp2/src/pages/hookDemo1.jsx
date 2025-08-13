/*

wo value jo round trip ke bich mai maintain rehti hai.
matlab re-rendering ke time per value persist rehti h , har baar initial nhi

*/

import { useState } from "react"

function HookDemo1(){

    // function btnClick() {
    //     setCount(count+1)
    //     console.log(count);
    // }

    const [ count , setCount ] = useState(0)

    return (
        <>
        <h1>hook demo componant  1 </h1>

        <div align='center'>

        Count : {count } <br />
        {/* <button onClick={btnClick} className="btn btn-outline-primary"> Button </button> */}
        <button onClick={ ()=> setCount(count+1) } className="btn btn-outline-primary"> Button </button>
        

        </div>
            
        </>
    )
}

export default HookDemo1 



/*

iss code mai count ki value to change hogi aur console mai print bhi hogi .
per count ki value ui per update nhi horhi .

why ? kyoki page re-render hi nhi horha , bas value change horhi aur console mai aarhi
    but value ui per change nhi hogi kyoki page re-render hi nhi hoga
   
sol - page re-render ke liye variable change krne se nhi hoga
      hme re-render ke liye state use krna pdega
      har state mai change ke sath page re-render ho jata hai

*/

/*
function HookDemo1(){

    let count = 0 

    function btnClick() {
        console.log(count);
        count++;
    }

    return (
        <>
        <h1>hook demo componant  1 </h1>

        <div align='center'>

        Count : {count } <br />
        <button onClick={btnClick} className="btn btn-outline-primary"> Button </button>

        </div>
            
        </>
    )
}

export default HookDemo1 
*/