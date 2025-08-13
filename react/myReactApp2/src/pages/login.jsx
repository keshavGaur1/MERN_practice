import { useNavigate } from "react-router-dom"

function Login(){

    const navigate = useNavigate()

    function loginfn() {
        navigate('/dash')
    }

    return (
        <>
            <h1>Login Componant</h1>

            <button className="btn btn-primary" onClick={ loginfn } > Login </button>
        </>
    )
}

export default Login 