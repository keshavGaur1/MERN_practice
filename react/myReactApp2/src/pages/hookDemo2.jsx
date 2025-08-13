import axios from "axios";
import { useState } from "react";

function HooksDemo2() {
  
    const [formData, setFormData] = useState({})
    const [ msg,setMsg ] = useState()

    function inputHandler(e){
        setFormData({...formData,[e.target.name] : e.target.value})   
    }

    async function formHandler(event){
        event.preventDefault()
        // console.log(formData)

        // send request to backend url using axios
        const res =  await axios.post("http://localhost:9000/admin/addUser",formData)
        console.log(res);

        setMsg(res.data.msg)
    }
    
  return (
    <>
    <h1>Hooks Demo 2 Component</h1>
    <div align='center'>
        <form method="post" onSubmit={formHandler}>
            <table className="table table-bordered w-50 table-dark">
                <tbody>
                    <tr>
                        <td>User Name</td>
                        <td><input type="text" name="unm" onInput={inputHandler}/></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" name="pwd" onInput={inputHandler}/></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><input type="email" name="mailId" onInput={inputHandler}/></td>
                    </tr>
                    <tr>
                        <td><input type="submit" name="btn" /></td>
                    </tr>
                </tbody>
            </table>
        </form>

        { msg && (
            <p className="alert alert-success">
                {msg}
            </p>
        )}
        
    </div>
    </>
  )
}

export default HooksDemo2;