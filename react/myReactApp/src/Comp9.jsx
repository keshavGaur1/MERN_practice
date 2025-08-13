function Comp9 () {

    let userNames = ["sachin","virat","rahul","jay"]

    return (
        <>
        <ul>
        { 
            userNames.map((name)=> (
            <p> {name} </p>
            ))  

            // userNames.forEach( ) 
            // yaha forEach use krege ko answer nhi milega but why ???
            // ans - map() function value ko return krke deta h jo as it is render ho jata hai per - forEach kewal elements ko access krta h use return nhi krata to isliye forEach se koi ans nhi milega
        }
        </ul>

        {/* { 
            userNames.map((name)=> (
            <p> {name} </p>
            ))  
        } */}
        
        </>
        
    )                  
}

export default Comp9