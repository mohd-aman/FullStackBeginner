import { useState } from "react"


export default function Controlled(){
    let [text,setText] = useState("");
    let handleChange = (e)=>{
        setText(e.target.value)
    }
    return(
        <div>
            <input type="text" placeholder="Controlled"
             value={text} onChange={handleChange}></input>
        </div>
    )
}