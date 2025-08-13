import { Outlet } from "react-router-dom"
import NavBar from "../componants/myNav"

function Dashboard(){
    return (
        <>
            <NavBar />
            
            <h1>Dashboard Componant</h1>

            <Outlet />
            {/* outlet ki jagah hi child render hoga */}

            

        </>
    )
}

export default Dashboard 