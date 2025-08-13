import { useParams } from "react-router-dom";

function DynamicRoute(){

    // dynamic url ki value ko read krne ke liye
  const name = useParams()
  console.log(name.nm);
  

    return (
        <>
            <h1>Dynamic Route Demo Componant</h1>

            
        </>
    )
}

export default DynamicRoute 