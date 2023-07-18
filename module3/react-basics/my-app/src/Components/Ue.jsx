import { useEffect, useState } from "react"

export default function Ue(){
    let [count,setCount] = useState(0);
    let [text,setText] = useState("");
    let [age,setAge] = useState(15);

    let handleClick = ()=>{
        setCount(count+1);
    }

    let handleChange = (e)=>{
        setText(e.target.value)
    }
    
    let handleAge = (e)=>{
        setAge(e.target.value)
    }

    // useEffect(()=>{
    //     console.log("I am inside useEffect");
    //     document.title = `Value of count is ${count}`
    // }) //it will run in mounting as well as updating phase.

    // useEffect(()=>{
    //     document.title = `Value of count is ${count}`
    // },[]) // it will run only in mounting phase. 

    useEffect(()=>{
        console.log("Running on count state change only")
        document.title = `Value of count is ${count}`
    },[count]) //it will run in mounting phase as well as updation of count state

    useEffect(()=>{
        console.log("running on text or age updation change");
    },[text,age]) // it will run in mounting phase as well as updation of text or age state

    // console.log("I am inside component");
    return(
        <div>
            <h1>This is my {count}</h1>
            <button onClick={handleClick}>Increment Count</button>
            <h2>Form</h2>
            <input type="text"  onChange={handleChange} value={text}/>
            <h2>{text}</h2>
            <input type="number" onChange={handleAge}  value = {age} />
        </div>

    )
}