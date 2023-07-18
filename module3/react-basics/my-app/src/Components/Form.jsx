import { useState } from "react"

 export default function Form(){
     let [firstName,setFirstName] = useState("");
     let [lastName,setLastName] = useState("");

     let handleFirstName = (e)=>{
        // console.log(e); // Native Event
        // console.log(e.target.value);
        setFirstName(e.target.value);
     }

     let handleLastName = (e)=>{
         setLastName(e.target.value);
     }

     let handleSubmit = (e)=>{
        e.preventDefault();
         console.log(firstName,lastName);
     }

     return(
         <div>
             <h1>Form</h1>
             <form onSubmit={handleSubmit}>
                 <label> First Name : </label>
                 <input onChange={handleFirstName} type="text" value={firstName} />
                 <label>Last Name : </label>
                 <input  onChange = {handleLastName} type="text" value={lastName} />
                 <button type="submit">Submit</button>
             </form>
         </div>
     )
 }