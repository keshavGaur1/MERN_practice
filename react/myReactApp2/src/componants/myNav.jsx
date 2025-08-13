import { Link } from "react-router-dom"

function NavBar() {
    return (
        
    <nav className="navbar bg-dark navbar-expand-md navbar-dark">
        <Link to="#" className="navbar-brand">
            <img src="/images/meet.png" width="80px" />   
        </Link>

        <button className="navbar-toggler" data-toggle="collapse" data-target="#myDiv">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="myDiv">
            <ul className="navbar-nav">

                <li className="nav-item"><Link className="nav-link" to="/dash/home">Home</Link></li>  
                <li className="nav-item"><Link className="nav-link" to="/dash/about">About Us</Link></li> 
                <li className="nav-item"><Link className="nav-link" to="/dash/add">Add User</Link></li> 
                <li className="nav-item"><Link className="nav-link" to="/dash/view">Show Users</Link></li> 




                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#">Link 3</Link>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/dash/hook1">Hook Demo 1</Link>
                        <Link className="dropdown-item" to="/dash/hook2">Hook Demo 2</Link>
                        
                    </div>
                </li>





                <li className="nav-item"><Link className="nav-link" to="#">Link 4</Link></li>
                <li className="nav-item"><Link className="nav-link" to="#">Link 5</Link></li>
            </ul>
        </div>

    </nav>

    )
}

export default NavBar
