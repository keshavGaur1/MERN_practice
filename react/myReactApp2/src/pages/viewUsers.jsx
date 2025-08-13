import axios from "axios"
import { useEffect, useState } from "react"

function ViewUser(){

    const [count , setCount] =  useState(0) 
    const [count2 , setCount2] =  useState(100)
    
    const [userData , setUserData] = useState([])
    
    // useEffect( ()=>{
    //     console.log('hi from use effect')
    // } , [ count2 ]
    // )


    //  ye krne se error ya warning aati h  kyoki useEffect ke ander ke callback ko async nhi bnate h , balki callback function ke ander async function ko call krte h
     
    // useEffect( async ()=>{
    //     const res = await axios.get("http://localhost:9000/admin/showUser")
    //     console.log(res.data);   
    // })

    async function fetchAllData () {
        const res = await axios.get("http://localhost:9000/admin/showUser")
        // console.log(res.data);
        setUserData(res.data)
    }

    useEffect( ()=> {
        fetchAllData()
    } ,[])

    return (
        <>
            <h1>View all Users Componant</h1>
            Count : {count}
            <button onClick={ ()=> setCount(count+1) } >Button</button>

            Count 2 : {count2}
            <button onClick={ ()=> setCount2(count2+1) } >Button</button>


            {/* rendering user data */}
            {
                userData.length > 0 && (
                    <table className="table table-bordered table-striped w-75 mx-auto ">
                        <thead className="table-dark">
                            <tr>
                                <th>User name </th>
                                <th>user password</th>
                                <th>user email </th>
                                <th>Role</th>
                                <th>Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            { userData.map( (user)=> (
                                <tr>
                                    <td> {user.userName} </td>
                                    <td> {user.password} </td>
                                    <td> {user.emailId} </td>
                                    <td> {user.hasRole} </td>
                                    <td> {user.isActive ? "Active" : "In-Active" } </td>
                                </tr>
                            ) ) 
                            }
                        </tbody>
                    </table>
                )
            }
        
        </>
    )
}

export default ViewUser 