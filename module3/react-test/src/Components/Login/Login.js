import { useState } from "react"



export default function Login(){
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const handleChange = (e)=>{
        e.preventDefault();
        setUserName(userName);
    }
    return(
        <div>
            <form>
                <label style={{margin:'20px'}}>UserName</label>
                <input type="text" placeholder="UserName"
                value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                <label style={{margin:"20px"}}>Password</label>
                <input type="password" placeholder="Password"
                value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={handleChange}
                disabled={!userName || !password}>Submit</button>
            </form>
        </div>
    )
}