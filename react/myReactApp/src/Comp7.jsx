function ValidUser() {
    return (
        <>
            <h1 className="alert alert-success">User is valid </h1>
        </>
    )
}

function InvalidUser() {
    return (
        <>
            <h1 className="alert alert-warning">User is in-valid </h1>
        </>
    )
}

function Comp7() {

    let isValid = true
    
    // nested componants + conditional rendering
    if(isValid)
        return < ValidUser />
    else 
        return < InvalidUser />
 
}

export default Comp7