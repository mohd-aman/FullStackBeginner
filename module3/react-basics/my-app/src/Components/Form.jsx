import { useState } from "react"

 export default function Form(){
     let [firstName,setFirstName] = useState("");

     let handleChange = (e)=>{
        // console.log(e); // Native Event
        // console.log(e.target.value);
        setFirstName(e.target.value);

     }

     return(
         <div>
             <h1>Form</h1>
             <form>
                 <label> First Name : </label>
                 <input onChange={handleChange} type="text" value={firstName} />
                 <label>Last Name : </label>
                 <input type="text" value={"last name"} />
             </form>
         </div>
     )
 }