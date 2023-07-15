import { useState } from "react";

export default function Counter(){

    let [count,setCount] = useState(0);
    
    function handleIncrement(){
        setCount(count+1);
        console.log("Plus has been clicked");
    }

    function handleDecrement(){
        if(count == 0){
            return;
        }
        setCount(count-1);
        console.log("Minus has been clicked");
    }

    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick={handleIncrement} >Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}