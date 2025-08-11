function Comp4 (){

    let name='keshav'
    let age=20
    let hobbies=['playing','coding']

    let user = {unm:'virat',gender:'male'}

    return (
        <>
            <p>
                Welcome { name } , age is {age} <br />
                Hobbies {hobbies} {/* playingcoding - array ke sare elements combine hoke aa jayege */}  <br />
                { hobbies[0] } <br />

                {/* {user}   */}  {/* isse error ayegi - ham object ko render nhi kra sakte hai  */}
                {/* reason - array mai index hote per object mai koi numbering nhi hoti */}

                {user.unm} {user.gender}


            </p>
        </>
    )
}

export default Comp4