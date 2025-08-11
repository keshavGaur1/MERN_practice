function CompA () {
    return (
        <>

            <h1>Componant A</h1>
        </>
    )
}

function CompB () {
    return (
        <>

            <h1>Componant B</h1>
        </>
    )
}

function Comp8() {

    let name = "natul"

    return (
        <>

         { name && <> Welcome {name} </> }

         { name ? <CompA /> : <CompB />  }


        </>
    )
}

export default Comp8