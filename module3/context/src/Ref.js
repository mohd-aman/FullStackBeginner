import { useRef, useState } from "react"

export default function Ref(){
    let [name,setName] = useState("");

    let clear = ()=>{
        setName("");
        refElement.current.focus();
    }

    let changeColor = ()=>{
        refElement.current.style.color = "Red"
        refElement.current.style.backgroundColor = "Yellow";
    }

    const refElement = useRef("");
    console.log(refElement);

    return(
        <>
            <h1>Use Ref</h1>
            <input ref={refElement}
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            ></input>

            <button onClick={clear}>Clear</button>
            <button onClick={changeColor}>Change Color</button>
        </>
    )
}