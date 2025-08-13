function Comp10 () {
    let count =0;
    function btnClick(){
        alert('hii')
    }

    function btnClick2(name){
        alert('Welcome '+name)
    }

    return (
        < >

        Count : {count} <br />

        <button className="btn btn-danger" onClick={btnClick}> Button 1 </button>
        {/* Yahan btnClick2 sirf reference hai — JavaScript sirf bata raha hai ki
"jab click event aaye tab is function ko call karna" */}

{/* ------------------------------------------------------------------------------------------------------------------- */}

        {/* <button className="btn btn-danger" onClick={btnClick()}> Button </button> */}
        {/* btnClick() likhne se function khud apne ap starting mai hi call ho jayega */}

        
        {/* pass arguments in a function  */}
        {/* <button className="btn btn-info" onClick={btnClick2('sachin')}> Button 2 </button> */}  
        {/* same btnClick2('sachin') ki wajh se function khud hi call ho jayega . per hme argument pass krna h aur chahte h ki button press hone pe kaam ho */}

        {/* Problem: btnClick2('sachin') ka matlab hota hai "abhi turant execute karo",
toh render hote hi React turant us function ko chala deta hai,
aur jo result return hua wo onClick me chala jata hai (usually undefined).
Iska matlab yeh event ke click hone ka wait hi nahi karta. */}


        <button className="btn btn-info" onClick={()=> btnClick2('sachin') } > Button 2 </button>
        {/* isme hmne onClick mai anonymous function bnaya . ye krne se argument pass krne ke baad bhi function apne aap execute nhi hoga. jab onClick event execute hoga tabhi function call hoga    */}

        {/* Yahan () => btnClick2('sachin') ek function expression hai jo tabhi run hoga
        jab button click hoga — ab render ke time pe yeh execute nahi hota,
        sirf ek wrapper function ka reference onClick me store hota hai. */}



{/* ------------------------------------------------------------------------------------------------------------------- */}




        </>
    )                  
}

export default Comp10