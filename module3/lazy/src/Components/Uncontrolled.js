import { useRef } from "react"


export default function Uncontrolled(){
    const inputRef = useRef(null);

    let handleClick = ()=>{
        console.log(inputRef.current.value)
    }

    return(
        <div>
            <input ref={inputRef} type="text" placeholder="Uncontrolled"/>
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}