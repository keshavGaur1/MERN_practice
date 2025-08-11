function Comp5() {
    const myStyle =  { padding:'20px' , backgroundColor:'navy'}  // css using object
    return (
        <>

            {/* inline css */}  { /*{{}} use krte hai inline css mai jisme ander wala {} css object ko re-present krega */ }
            <h1 style={{backgroundColor:'red' , lineHeight:'100px'}}> Componant 5</h1>

            {/* css using object */}
            <p style={myStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus, quae dignissimos voluptatibus quod saepe ullam. Esse sapiente nam alias tempora. Tempore sed veniam nemo amet dicta neque autem alias, laborum doloremque a recusandae dolor animi commodi explicabo? Voluptas doloremque reiciendis a magni.</p>

        </>
    )
}

export default Comp5