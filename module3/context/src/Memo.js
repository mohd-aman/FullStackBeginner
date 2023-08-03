import { useMemo, useState } from "react";

export default function Memo(){
    let [inc,setInc] = useState(0);
    let [num,setNum] = useState(1);

    let fact = useMemo(()=>factorial(num),[num])
    
    return(
        <>
            <span>Factorial of - </span>
            <input type="number"
            onChange={(e)=>setNum(e.target.value)}
            ></input>
            <div>Factorial is - {fact}</div>
            <button onClick={()=>setInc(inc+1)}>Re-Render</button>
        </>
        
    )
}

function factorial(n){
    console.log("Factorial fxn exectured");
    if(n<=1) return 1;
    return n*factorial(n-1)
}